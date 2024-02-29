import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import { config } from './config';
import { UserRoute } from './modules/user/user.route';
import bodyParser from 'body-parser';
import { errorHandler } from './middleware/errorHandler.middleware';

const app = express();

app.use(bodyParser.json());
app.use('/user', UserRoute);

// connect to db
const options: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: 'admin',
  dbName: 'fee_collector',
} as ConnectOptions;

mongoose
  .connect(config.database_uri, options)
  .then((result) => {
    console.log('DB connected');
  })
  .catch((err) => console.log('error: ' + err));

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Fee Collector Scraper is listening to port ${config.port}`);
});
