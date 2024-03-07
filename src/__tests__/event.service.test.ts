import { EventModel } from '../models/feesCollected.model';
import { InternalError, NotFoundError } from '../utils/errors';
import { IFeesCollectedEvent } from '../models/feesCollected.interface';
import { EventService } from '../services/event.service';

jest.mock('../utils/logger', () => ({
  debug: jest.fn(),
  info: jest.fn(),
}));

jest.mock('../models/feesCollected.model', () => ({
  EventModel: {
    findOne: jest.fn() as jest.Mock,

    find: jest.fn() as jest.Mock,
    create: jest.fn() as jest.Mock,
  },
}));

const mockEvent: IFeesCollectedEvent = {
  _id: 'eventId',
  token: '0x0000000000000000000000000000000000000000',
  integrator: '0xD5e230cEa6dA2F0C62bdeED2Cf85326F1063e27D',
  integratorFee: BigInt(816000000000000),
  lifiFee: BigInt(144000000000000),
  blockNumber: 47962028,
};

describe('EventService', () => {
  let eventService: EventService;

  beforeEach(() => {
    jest.clearAllMocks();
    eventService = new EventService();
  });

  describe('CreateEvent', () => {
    it('should create an event successfully', async () => {
      (EventModel.findOne as jest.Mock).mockResolvedValue(null);
      (EventModel.create as jest.Mock).mockResolvedValue(mockEvent);

      await eventService.CreateEvent(mockEvent);

      expect(EventModel.findOne).toHaveBeenCalledWith({ _id: mockEvent._id });
      expect(EventModel.create).toHaveBeenCalledWith(mockEvent);
    });

    it('should throw InternalError', async () => {
      (EventModel.findOne as jest.Mock).mockRejectedValue(
        new Error('Database error'),
      );

      await expect(eventService.CreateEvent(mockEvent)).rejects.toThrow(
        InternalError,
      );
    });
  });

  describe('GetEventsByIntegrator', () => {
    const integratorAddress = '0xD5e230cEa6dA2F0C62bdeED2Cf85326F1063e27D';

    it('should return events', async () => {
      const mockEvents = [mockEvent];

      (EventModel.find as jest.Mock).mockResolvedValue(mockEvents);

      const result =
        await eventService.GetEventsByIntegrator(integratorAddress);

      expect(result).toEqual(mockEvents);
      expect(EventModel.find).toHaveBeenCalledWith({
        integrator: integratorAddress,
      });
    });

    it('should throw NotFoundError', async () => {
      (EventModel.find as jest.Mock).mockResolvedValue([]);

      await expect(
        eventService.GetEventsByIntegrator(integratorAddress),
      ).rejects.toThrow(NotFoundError);
      expect(EventModel.find).toHaveBeenCalledWith({
        integrator: integratorAddress,
      });
    });
  });
});
