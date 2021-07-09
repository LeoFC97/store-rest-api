import StoreMongoDBRepository from '../../drivers/mongodb/store/store-mongodb-repository';
import container from '../../container';
import Store from '../../interfaces/entities/store/store';
import StoreMock, { createStoreUseCaseDataMock } from '../../../test/mocks/store';

import CreateStoreUseCase from './create-store';

let createStoreMongoDBRepositorySpy:jest.SpyInstance<Promise<Store>>;

const storeMongoDBRepositoryResolved = container.resolve(StoreMongoDBRepository);

const makeSpyOnExecuteUseCase = () => {
  createStoreMongoDBRepositorySpy = jest.spyOn(storeMongoDBRepositoryResolved, 'create');
  createStoreMongoDBRepositorySpy.mockImplementation(
    async () => new Promise((resolve) => resolve(StoreMock)),
  );
};

describe('Create store use case', () => {
  beforeEach(async () => {
    makeSpyOnExecuteUseCase();
  });
  test('Should call create store repository with correct store data', async () => {
    const useCase = new CreateStoreUseCase(storeMongoDBRepositoryResolved);
    const expectedCreateStoreData = {
      address: {
        cep: '00000000',
        complement: 'complement for mocking',
        number: 123,
        street: 'Number',
      },
      createdBy: {
        email: 'mock@mockMail.com',
        name: 'Mock Name',
      },
      name: 'Store name for testing',
      pictureUrL: 'www.urlForMocking.com',
    };
    await useCase.execute(createStoreUseCaseDataMock);
    expect(createStoreMongoDBRepositorySpy).toHaveBeenCalledWith(expectedCreateStoreData);
  });
});
