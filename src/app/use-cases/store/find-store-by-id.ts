import { inject, injectable } from 'tsyringe';
import Store from '../../interfaces/entities/store/store';
import UseCase from '../../interfaces/use-case';
import StoreRepository from '../../interfaces/entities/store/store-repository';
import EntityNotFoundError from 'app/errors/entity-not-found';

@injectable()
class FindStoreByIdUseCase implements UseCase {
  constructor(
    @inject('StoreRepository') private storeRepository: StoreRepository,
  ) {}

  async execute(storeIdToBeRemoved: string): Promise<Store> {
    const store = await this.storeRepository.getById(storeIdToBeRemoved);
    if (!store) {
      throw new EntityNotFoundError('store not found for this id');
    } else {
      return store;
    }
  }
}
export default FindStoreByIdUseCase;
