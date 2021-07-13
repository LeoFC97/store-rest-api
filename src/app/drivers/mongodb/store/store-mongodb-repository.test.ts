/* eslint-disable no-underscore-dangle */
import { Collection, Connection } from 'mongoose';
import Store from 'app/interfaces/entities/store/store';
import SetupDatabaseForTests from '../../../../test/setup-database-for-tests';
import StoreMongoDBRepository from './store-mongodb-repository';
import { createStoreData } from '../../../../test/mocks/store';
import Product from '../../../interfaces/entities/product/product';
import { createProductData } from '../../../../test/mocks/product';

describe('Store MongoDB Repository', () => {
  let connection: Connection;

  let storeCollection: Collection;
  let productCollection: Collection;
  let storeRepository: StoreMongoDBRepository;

  beforeAll(async () => {
    await SetupDatabaseForTests.initializeMongoInMemory();
    connection = SetupDatabaseForTests.getConnection();

    storeCollection = connection.collection('stores');
    productCollection = connection.collection('products');

    storeRepository = new StoreMongoDBRepository();
  });

  afterAll(async () => {
    await SetupDatabaseForTests.closeConnection(connection);
  });

  afterEach(async () => {
    await productCollection.deleteMany({});
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
  it('Should return storeObject when find a store to query', async () => {
    await storeCollection.insertOne(createStoreData);
    const store : Store = await storeRepository.getById('60e67963b9bd7320c7f71833');
    expect(store).toBeDefined();
  });
  it('Should return null when didnt find a store to query', async () => {
    await storeCollection.insertOne(createStoreData);
    const store : Store = await storeRepository.getById('60e67963b9bd7320c7f71833');
    expect(store).toBeNull();
  });
  it('Should return true when add new product to product to Store recive correct storeId', async () => {
    await storeCollection.insertOne(createStoreData);
    await productCollection.insertOne(createProductData);
    const { _id: storeCreatedId }: Store = await storeCollection.findOne({});
    const { _id: productCreatedId }: Product = await productCollection.findOne({});
    const objectsIdParsedToString = {
      productCreatedId: productCreatedId.toHexString(),
      storeCreatedId: storeCreatedId.toHexString(),
    };
    const productWasAdded = await storeRepository.addProductToArrayOfProducts(
      objectsIdParsedToString.productCreatedId, objectsIdParsedToString.storeCreatedId,
    );
    expect(productWasAdded).toBeTruthy();
  });
  it('Should return false when add new product to Store recive wrong storeId ', async () => {
    await productCollection.insertOne(createProductData);
    const { _id: productCreatedId }: Product = await productCollection.findOne({});
    const objectsIdParsedToString = {
      productCreatedId: productCreatedId.toHexString(),
    };
    const productWasAdded = await storeRepository.addProductToArrayOfProducts(
      objectsIdParsedToString.productCreatedId, '11ee16222ac43f432cd3bd25',
    );
    expect(productWasAdded).toBeFalsy();
  });
});
