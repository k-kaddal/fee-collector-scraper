import mongoose, { ConnectOptions } from 'mongoose';
import { config } from '../config';
import logger from './logger';
import { ContractService } from '../services/contract.service';

async function InitDatabase() {
  try {
    const options: ConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: 'admin',
      dbName: 'fee_collector',
    } as ConnectOptions;

    await mongoose.connect(config.databaseUri, options);
    logger.info(`MongoDB connected`);
  } catch (error) {
    logger.error(`InitDatabase(): ${error}`);
  }
}

function SyncDatabase(contractService: ContractService) {
  try {
    contractService.SyncFeeCollectorEvents();
    setInterval(async () => {
      contractService.SyncFeeCollectorEvents();
    }, config.eventPollingInterval);
  } catch (error) {
    logger.error(`SyncDatabase(): ${error}`);
  }
}

export { InitDatabase, SyncDatabase };
