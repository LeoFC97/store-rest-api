import supertest from 'supertest';
import startExpressServer from '../../../drivers/http/server';
import MongoDbManager from '../../../drivers/mongodb/mongodb-manager';

describe('Test health endpoints', () => {
  afterEach(async () => {
    jest.clearAllMocks();
  });
  test('Should return 200 when database is connected', async () => {
    const apiMocked = await supertest(startExpressServer());
    const mongoDbManager: jest.SpyInstance<boolean> = jest.spyOn(MongoDbManager, 'isConnected');
    mongoDbManager.mockImplementation(
      () => true,
    );
    const result = await apiMocked.get('/health');
    expect(result.statusCode).toBe(200);
  });
  test('Should return 500 when database is not connected', async () => {
    const mongoDbManager: jest.SpyInstance<boolean> = jest.spyOn(MongoDbManager, 'isConnected');
    mongoDbManager.mockImplementation(
      () => false,
    );
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.get('/health');
    expect(result.statusCode).toBe(500);
  });
});
