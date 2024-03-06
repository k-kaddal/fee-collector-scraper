import { InternalError, NotFoundError } from '../errors';
import { EventModel } from '../models/feesCollected.model';
import logger from '../utils/logger';
import { EventLog } from 'ethers';

export class EventService {
  async CreateEvent(event: EventLog) {
    const id = `${event.transactionHash}-${event.index}-${event.blockNumber}`;
    const existingEvent = await EventModel.findOne({ _id: id });

    if (!existingEvent) {
      try {
        await EventModel.create({
          _id: id,
          token: event.args._token,
          integrator: event.args._integrator,
          integratorFee: event.args._integratorFee,
          lifiFee: event.args._lifiFee,
          blockNumber: event.blockNumber,
        });
        logger.debug(`Event created: ${id}`);
      } catch (error: any) {
        throw new InternalError(`Error creating event: ${error.message}`);
      }
    }
  }

  async GetEventsByIntegrator(integratorAddress: string) {
    logger.info(`EventService: GetEventsByIntegrator(${integratorAddress})`);

    const events = await EventModel.find({ integrator: integratorAddress });

    if (!events.length) {
      throw new NotFoundError(
        `No events found for integrator: ${integratorAddress}`,
      );
    }

    return events;
  }

  async GetLatestEvent() {
    try {
      const latestEvent = await EventModel.findOne().sort({ createdAt: -1 });
      return latestEvent;
    } catch (error: any) {
      throw new InternalError(
        `Error retrieving latest event: ${error.message}`,
      );
    }
  }
}
