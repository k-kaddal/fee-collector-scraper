import { Request, Response } from 'express';
import { BadRequestError } from '../utils/errors';
import { GetEventsByIntegrator } from '../controllers/integrator.controller';

const mockedEvents = [
  {
    _id: '0xb2040a9fb38eae3f1d62a2c10c978fb148c09ec82f1444d279a72e2d91b0b0e3-227-47962028',
    token: '0x0000000000000000000000000000000000000000',
    integrator: '0xD5e230cEa6dA2F0C62bdeED2Cf85326F1063e27D',
    integratorFee: 816000000000000,
    lifiFee: 144000000000000,
    blockNumber: 47962028,
    __v: 0,
  },
];

jest.mock('../services/event.service', () => ({
  EventService: jest.fn().mockImplementation(() => ({
    GetEventsByIntegrator: jest.fn().mockResolvedValue(mockedEvents), // Mocking the result of GetEventsByIntegrator
  })),
}));

describe('GetEventsByIntegrator', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { params: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  it('200: getting events successfully', async () => {
    req.params = { address: '0xD5e230cEa6dA2F0C62bdeED2Cf85326F1063e27D' };

    await GetEventsByIntegrator(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ events: mockedEvents });
    expect(next).not.toHaveBeenCalled();
  });

  it('400: integrator address is invalid', async () => {
    req = {
      params: {
        address: 'invalid_address',
      },
    };

    await GetEventsByIntegrator(req as Request, res as Response, next);
    expect(next).toHaveBeenCalledWith(expect.any(BadRequestError));
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});
