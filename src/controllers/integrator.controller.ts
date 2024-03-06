import { NextFunction, Request, Response } from 'express';
import { ethers } from 'ethers';
import { BadRequestError } from '../errors';
import logger from '../utils/logger';
import { EventService } from '../services/event.service';

const eventService = new EventService();

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

    const events = await eventService.GetEventsByIntegrator(integratorAddress);

    return res.status(200).json({ events: events });
  } catch (error) {
    next(error);
  }
};
