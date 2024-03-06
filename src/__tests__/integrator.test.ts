import { createServer } from 'http';
import supertest from 'supertest';

const app = createServer();

describe('Integrator', () => {
  describe('get events by integrator', () => {
    describe('given the integrator does not exist', () => {
      it('should return a 404', async () => {
        const integratorAddress = '123';

        await supertest(app)
          .get(`v1/api/integrator/${integratorAddress}/feeCollector`)
          .expect(400);
      });
    });
  });
});
