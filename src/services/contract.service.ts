import { Contract, JsonRpcProvider, ethers, EventLog } from 'ethers';
import { LifiContract__factory } from './lifi-contract-types';
import { InternalError } from '../utils/errors';
import { config } from '../config';
import logger from '../utils/logger';
import { EventService } from './event.service';
import { IFeesCollectedEvent } from '../models/feesCollected.interface';

export class ContractService {
  private initialBlock: number;
  private readonly provider: JsonRpcProvider;
  private readonly contract: Contract;
  private readonly eventService: EventService;

  constructor() {
    this.provider = new ethers.JsonRpcProvider(config.providerRpc);
    this.contract = new ethers.Contract(
      config.contractAddress,
      LifiContract__factory.createInterface(),
      this.provider,
    );
    this.initialBlock = 47961368;
    this.eventService = new EventService();
  }

  async SyncFeeCollectorEvents() {
    logger.info('EventService: GetFeeCollectorEvents()');

    // Initialise starting block
    await this.initializeBlock();
    const toBlock = await this.provider.getBlockNumber();

    // load and store events from chain
    await this.loadFeeCollectorEvents(this.initialBlock, toBlock);

    // init latest block has been retrieved
    this.initialBlock = toBlock;
    return;
  }

  private async initializeBlock() {
    logger.info('EventService: initializeInitialBlock()');

    // get the latest stored event's block number
    const latestEvent = await this.eventService.GetLatestEvent();
    if (latestEvent?.blockNumber) {
      this.initialBlock = latestEvent.blockNumber;
    }

    return;
  }

  private async loadFeeCollectorEvents(fromBlock: number, toBlock: number) {
    logger.info(`EventService: getAllEventsByBlocks()`);
    try {
      const batchSize = 3000;
      let allEvents: EventLog[] = [];
      const filter = this.contract.filters.FeesCollected();

      for (let i = fromBlock; i < toBlock; i += batchSize) {
        const startBlock = i;
        const endBlock = Math.min(toBlock, i + batchSize - 1);

        logger.info(
          `Loading blocks [${startBlock}-${endBlock}] out of ${toBlock}`,
        );

        const events = (await this.contract.queryFilter(
          filter,
          startBlock,
          endBlock,
        )) as EventLog[];

        for (const event of events) {
          const parsedEvent = this.parseFeeCollectorEvents(event);
          await this.eventService.CreateEvent(parsedEvent);
        }

        allEvents = [...allEvents, ...events];
      }

      return;
    } catch (error) {
      logger.error(`loadFeeCollectorEvents: ${error}`);
      throw error;
    }
  }

  private parseFeeCollectorEvents(event: EventLog): IFeesCollectedEvent {
    const id = `${event.transactionHash}-${event.index}-${event.blockNumber}`;

    const parsedEvent: IFeesCollectedEvent = {
      _id: id,
      token: event.args._token,
      integrator: event.args._integrator,
      integratorFee: BigInt(event.args._integratorFee),
      lifiFee: BigInt(event.args._lifiFee),
      blockNumber: event.blockNumber,
    };

    return parsedEvent;
  }
}
