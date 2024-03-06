import express from 'express';
import routes from '../routes';
import bodyParser from 'body-parser';

function createServer() {
  const app = express();

  app.use(bodyParser.json());

  routes(app);

  return app;
}

export default createServer;
