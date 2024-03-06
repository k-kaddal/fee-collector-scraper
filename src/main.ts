import { config } from './config';
import { ContractService } from './services/contract.service';
import { InitDatabase, SyncDatabase } from './utils/database';
import routes from './routes';
import logger from './utils/logger';
import createServer from './utils/server';

export const app = createServer();

// Start Server
app.listen(config.port, async () => {
  logger.info(`Server is listening to port ${config.port}`);

  // Init Database
  await InitDatabase();

  // Create route
  routes(app);

  // Syncronise Database with FeeCollector events
  const contractService = new ContractService();
  SyncDatabase(contractService);
});
