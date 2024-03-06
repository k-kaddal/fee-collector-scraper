require('dotenv').config();

export const config = {
  port: process.env.PORT || 8080,
  databaseUri: process.env.DATABASE_URI as string,
  contractAddress: process.env.CONTRACT_ADDRESS as string,
  providerRpc: process.env.PROVIDER_RPC as string,
  nodeEnv: process.env.NODE_ENV as string,
  eventPollingInterval: process.env.EVENT_POLLING_INTERVAL
    ? parseInt(process.env.EVENT_POLLING_INTERVAL)
    : 3600000,
};
