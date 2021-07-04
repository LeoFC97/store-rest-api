/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Collection, Connection } from 'mongoose';
import SetupDatabaseForTests from './setup-database-for-tests';

describe('Adjustment MongoDb Repository', () => {
  let connection: Connection;
  let collectionForTesting: Collection;

  beforeAll(async () => {
    await SetupDatabaseForTests.initializeMongoInMemory();
    connection = SetupDatabaseForTests.getConnection();
    collectionForTesting = connection.collection('collectionForMocking');
  });

  afterAll(async () => {
    await SetupDatabaseForTests.closeConnection(connection);
  });
  it('Check if database is set to localhost ', () => {
    const { host } = collectionForTesting.conn;
    expect(host).toBe('127.0.0.1');
  });
  it('Check if database is set to localhost ', () => {
    const { port } = collectionForTesting.conn;
    expect(port).toBeGreaterThan(40000);
  });
  it('Check if database is set to localhost ', () => {
    const { user } = collectionForTesting.conn;
    expect(user).toBeUndefined();
  });
  it('Check if database is set to localhost ', () => {
    const { pass } = collectionForTesting.conn;
    expect(pass).toBeUndefined();
  });
});