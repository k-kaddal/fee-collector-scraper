import { NextFunction, Request, Response } from 'express';
import { ethers } from 'ethers';
import { BadRequestError } from '../utils/errors';
import logger from '../utils/logger';
import { EventService } from '../services/event.service';

export const GetEventsByIntegrator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.info('IntegratorController : GetEventsByIntegrator()');
  try {
    const integratorAddress: string = req.params.address;

    if (!ethers.isAddress(integratorAddress)) {
      throw new BadRequestError('Invalid Ethereum address');
    }

    const eventService = new EventService();
    const events = await eventService.GetEventsByIntegrator(integratorAddress);

    return res.status(200).json({ events: events });
  } catch (error) {
    next(error);
  }
};
