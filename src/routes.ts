import { Express, Request, Response, Router } from 'express';
import { GetEventsByIntegrator } from './controllers/integrator.controller';
import { errorHandler } from './middleware/errorHandler.middleware';

function routes(app: Express) {
  const router = Router();

  router.get('/healthcheck', (req: Request, res: Response) =>
    res.sendStatus(200),
  );
  router.get('/integrator/:address/feeCollector', GetEventsByIntegrator);

  app.use('/v1/api', router);
  app.use(errorHandler);
}

export default routes;
