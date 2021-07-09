/* eslint-disable no-underscore-dangle */
import { Collection, Connection } from 'mongoose';
import Store from 'app/interfaces/entities/store/store';
import SetupDatabaseForTests from '../../../../test/setup-database-for-tests';
import StoreMongoDBRepository from './store-mongodb-repository';
import { createStoreData } from '../../../../test/mocks/store';

describe('Store MongoDB Repository', () => {
  let connection: Connection;

  let storeCollection: Collection;

  let storeRepository: StoreMongoDBRepository;

  beforeAll(async () => {
    await SetupDatabaseForTests.initializeMongoInMemory();
    connection = SetupDatabaseForTests.getConnection();

    storeCollection = connection.collection('stores');

    storeRepository = new StoreMongoDBRepository();
  });

  afterAll(async () => {
    await SetupDatabaseForTests.closeConnection(connection);
  });

  afterEach(async () => {
    await storeCollection.deleteMany({});
  });

  it('Should create store when create method creat is called', async () => {
    await storeRepository.create(createStoreData);

    const createdStore: Store = await storeCollection.findOne(
      { name: createStoreData.name },
    );

    expect(createdStore).not.toBe(null);
    expect(createdStore.name).toBe(createStoreData.name);
    expect(createdStore.pictureUrL).toBe(createStoreData.pictureUrL);
    expect(createdStore.address).toStrictEqual(createStoreData.address);
    expect(createdStore.createdBy).toStrictEqual(createStoreData.createdBy);
  });
  it('Should delete store when create method deleteById is called', async () => {
    await storeCollection.insertOne(createStoreData);

    const createdStore: Store = await storeCollection.findOne(
      { name: createStoreData.name },
    );
    const storeWasDeleated : boolean = await storeRepository
      .deleteById(createdStore._id.toHexString());
    const storeExistis: Store = await storeCollection.findOne(
      { name: createStoreData.name },
    );
    expect(storeExistis).toBeNull();
    expect(storeWasDeleated).toBeTruthy();
  });
  it('Should return false when didnt find a store to deleted', async () => {
    const storeWasDeleated : boolean = await storeRepository
      .deleteById('60e67963b9bd7320c7f71833');
    expect(storeWasDeleated).toBeFalsy();
  });
});
