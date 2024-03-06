import { Contract, JsonRpcProvider, ethers, EventLog } from 'ethers';
import { LifiContract__factory } from './lifi-contract-types';
import { InternalError } from '../errors';
import { config } from '../config';
import logger from '../utils/logger';
import { EventService } from './event.service';

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

    await this.initializeBlock();

    const toBlock = await this.provider.getBlockNumber();
    const allEvents = await this.loadFeeCollectorEvents(
      this.initialBlock,
      toBlock,
    );

    this.initialBlock = toBlock;

    return allEvents;
  }

  private async initializeBlock() {
    logger.info('EventService: initializeInitialBlock()');

    const latestEvent = await this.eventService.GetLatestEvent();
    if (latestEvent?.blockNumber) {
      this.initialBlock = latestEvent.blockNumber;
    }

    return;
  }

  private async loadFeeCollectorEvents(
    fromBlock: number,
    toBlock: number,
  ): Promise<EventLog[]> {
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
          await this.eventService.CreateEvent(event);
        }

        allEvents = [...allEvents, ...events];
      }

      return allEvents;
    } catch (error) {
      logger.error(`Error getting events by blocks: ${error}`);
      throw new InternalError();
    }
  }
}
