import supertest from 'supertest';
import startExpressServer from '../../../drivers/http/server';
import SetupDatabaseForTests from '../../../../test/setup-database-for-tests';

describe('Test health endpoints', () => {
  afterEach(async () => {
    jest.clearAllMocks();
    const connection = await SetupDatabaseForTests.getConnection();
    await SetupDatabaseForTests.closeConnection(connection);
  });
  test('Should return 200 when database is connected', async () => {
    const apiMocked = await supertest(startExpressServer());
    await SetupDatabaseForTests.initializeMongoInMemory();
    const result = await apiMocked.get('/health');
    expect(result.statusCode).toBe(200);
  });
  test('Should return 500 when database is not connected', async () => {
    const setupDatabaaseForTests: jest.SpyInstance<Promise<void>> = jest.spyOn(SetupDatabaseForTests, 'initializeMongoInMemory');
    setupDatabaaseForTests.mockImplementation(
      async () => new Promise((resolve, reject) => (new Error())),
    );
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.get('/health');
    expect(result.statusCode).toBe(500);
  });
});
