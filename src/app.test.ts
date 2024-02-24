import request from 'supertest';
import app from './app';
describe('API', () => {
  it('can check the health', async () => {
    const response = await request(app).get('/_health').send();
    expect(response.statusCode).toEqual(200);
  });
});
