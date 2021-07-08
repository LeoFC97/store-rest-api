import StoreMongoDBRepository from '../../drivers/mongodb/store/store-mongodb-repository';
import container from '../../container';

import DeleteStoreByIdUseCase from './delete-store-by-id';

let deleteStoreByIdMongoDBRepositorySpy:jest.SpyInstance<Promise<boolean>>;

const storeMongoDBRepositoryResolved = container.resolve(StoreMongoDBRepository);

const makeSpyOnExecuteUseCase = () => {
  deleteStoreByIdMongoDBRepositorySpy = jest.spyOn(storeMongoDBRepositoryResolved, 'deleteById');
  deleteStoreByIdMongoDBRepositorySpy.mockImplementation(
    async () => new Promise((resolve) => resolve(true)),
  );
};

describe('Delete store by id use case', () => {
  beforeEach(async () => {
    makeSpyOnExecuteUseCase();
  });
  test('Should call create store repository with correct adjustment id', async () => {
    const useCase = new DeleteStoreByIdUseCase(storeMongoDBRepositoryResolved);
    await useCase.execute('60e67963b9bd7320c7f71833');
    expect(deleteStoreByIdMongoDBRepositorySpy).toHaveBeenCalledWith('60e67963b9bd7320c7f71833');
  });
});
