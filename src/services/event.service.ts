import { InternalError, NotFoundError } from '../utils/errors';
import { EventModel } from '../models/feesCollected.model';
import logger from '../utils/logger';
import { IFeesCollectedEvent } from '../models/feesCollected.interface';

export class EventService {
  async CreateEvent(event: IFeesCollectedEvent) {
    try {
      const existingEvent = await EventModel.findOne({ _id: event._id });

      if (!existingEvent) {
        await EventModel.create(event);
        logger.debug(`Event created: ${event._id}`);
      }
    } catch (error: any) {
      throw new InternalError(`CreateEvent: ${error.message}`);
    }
  }

  async GetEventsByIntegrator(
    integratorAddress: string,
  ): Promise<IFeesCollectedEvent[]> {
    try {
      logger.info(`EventService: GetEventsByIntegrator(${integratorAddress})`);

      const events = await EventModel.find({ integrator: integratorAddress });

      if (!events.length) {
        throw new NotFoundError(
          `No events found for integrator: ${integratorAddress}`,
        );
      }

      return events;
    } catch (error: any) {
      throw new InternalError(`GetEventsByIntegrator: ${error.message}`);
    }
  }

  async GetLatestEvent(): Promise<IFeesCollectedEvent | null> {
    try {
      const latestEvent = await EventModel.findOne().sort({ createdAt: -1 });
      return latestEvent;
    } catch (error: any) {
      throw new InternalError(`GetLatestEvent: ${error.message}`);
    }
  }
}
