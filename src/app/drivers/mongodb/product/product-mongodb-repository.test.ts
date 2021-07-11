/* eslint-disable no-underscore-dangle */
import { Collection, Connection } from 'mongoose';
import Product from 'app/interfaces/entities/product/product';
import SetupDatabaseForTests from '../../../../test/setup-database-for-tests';
import ProductMongoDBRepository from './product-mongodb-repository';
import { createProductData } from '../../../../test/mocks/product';

describe('Product MongoDB Repository', () => {
  let connection: Connection;

  let productCollection: Collection;

  let productRepository: ProductMongoDBRepository;

  beforeAll(async () => {
    await SetupDatabaseForTests.initializeMongoInMemory();
    connection = SetupDatabaseForTests.getConnection();

    productCollection = connection.collection('products');

    productRepository = new ProductMongoDBRepository();
  });

  afterAll(async () => {
    await SetupDatabaseForTests.closeConnection(connection);
  });

  afterEach(async () => {
    await productCollection.deleteMany({});
  });

  it('Should create product when create method creat is called', async () => {
    await productRepository.create(createProductData);

    const createdProduct: Product = await productCollection.findOne(
      { name: createProductData.name },
    );

    expect(createdProduct).not.toBe(null);
    expect(createdProduct.name).toBe(createdProduct.name);
    expect(createdProduct.pictureUrL).toBe(createdProduct.pictureUrL);
    expect(createdProduct.category).toStrictEqual(createdProduct.category);
    expect(createdProduct.price).toStrictEqual(createdProduct.price);
    expect(createdProduct.createdBy).toStrictEqual(createdProduct.createdBy);
  });
});
