import { Request, Response } from 'express';
import { BadRequestError } from '../utils/errors';
import { GetEventsByIntegrator } from './integrator.controller';
import { EventService } from '../services/event.service';
import { FeesCollectedEventClass } from '../models/feesCollected.model';


const mockedEvents = [{}]

jest.mock('../services/event.service', ()=>({
    GetEventsByIntegrator: jest.fn().mockImplementation(()=>(mockedEvents))
}));

describe('GetEventsByIntegrator', () => {

  const mockedEventService = EventService as jest.Mocked<
    typeof EventService
  >;

  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks()
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    next = jest.fn();
  });

  it('200: getting events successfully', async () => {
    req = {
      params: {
        address: 'invalid_address',
      },
    };

    // // Mock the GetEventsByIntegrator method to return mocked events
    // mockedEventService.prototype.GetEventsByIntegrator.mockResolvedValueOnce(
    //   mockedEvents,
    // );

    mockedEventService.

    await GetEventsByIntegrator(req as Request, res as Response, next);
  });

  it('400: integrator address is invalid', async () => {
    req = {
      params: {
        address: 'invalid_address',
      },
    };
    await GetEventsByIntegrator(req as Request, res as Response, next);
    expect(next).toHaveBeenCalledWith(expect.any(BadRequestError));
  });

  //   it('returns list of events if integrator address is valid', async () => {
  //     req = {
  //       params: {
  //         address: '0xD5e230cEa6dA2F0C62bdeED2Cf85326F1063e27D',
  //       },
  //     };

  //     // Mocked events matching the structure of documents in EventModel
  //     const mockedEvents = [
  //       {
  //         _id: 'mocked_id_1',
  //         token: '0x0000000000000000000000000000000000000000',
  //         integrator: '0xD5e230cEa6dA2F0C62bdeED2Cf85326F1063e27D',
  //         integratorFee: '34000000000000',
  //         lifiFee: '6000000000000',
  //         blockNumber: 47994617,
  //         __v: 0,
  //       },
  //     ];

  //     // Mock the GetEventsByIntegrator method to return mocked events
  //     mockedEventService.prototype.GetEventsByIntegrator.mockResolvedValueOnce(
  //       mockedEvents,
  //     );

  //     await GetEventsByIntegrator(req as Request, res as Response, next);

  //     // Verify that response status is 200 and contains the list of events
  //     expect(res.status).toHaveBeenCalledWith(200);
  //     expect(res.json).toHaveBeenCalledWith({ events: mockedEvents });
  //   });
});
