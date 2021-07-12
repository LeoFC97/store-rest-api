import ProductMongoDBRepository from '../../drivers/mongodb/product/product-mongodb-repository';
import container from '../../container';
import Product from '../../interfaces/entities/product/product';
import ProductMock, { createProductUseCaseDataMock } from '../../../test/mocks/product';

import CreateProductUseCase from './create-product';

let createProductMongoDBRepositorySpy:jest.SpyInstance<Promise<Product>>;

const productMongoDBRepositoryResolved = container.resolve(ProductMongoDBRepository);

const makeSpyOnExecuteUseCase = () => {
  createProductMongoDBRepositorySpy = jest.spyOn(productMongoDBRepositoryResolved, 'create');
  createProductMongoDBRepositorySpy.mockImplementation(
    async () => new Promise((resolve) => resolve(ProductMock)),
  );
};

describe('Create product use case', () => {
  beforeEach(async () => {
    makeSpyOnExecuteUseCase();
  });
  test('Should call create product repository with correct product data', async () => {
    const useCase = new CreateProductUseCase(productMongoDBRepositoryResolved);
    const expectedCreateProductData = {
      category: 'TACOS',
      createdBy: {
        email: 'mock@mockMail.com',
        name: 'Mock Name',
      },
      price: 1200,
      name: 'Product name for testing',
      pictureUrL: 'www.urlForMocking.com',
    };
    await useCase.execute(createProductUseCaseDataMock);
    expect(createProductMongoDBRepositorySpy).toHaveBeenCalledWith(expectedCreateProductData);
  });
});
