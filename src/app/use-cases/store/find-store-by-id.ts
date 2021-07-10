import { inject, injectable } from 'tsyringe';
import Store from '../../interfaces/entities/store/store';
import UseCase from '../../interfaces/use-case';
import StoreRepository from '../../interfaces/entities/store/store-repository';

@injectable()
class FindStoreByIdUseCase implements UseCase {
  constructor(
    @inject('StoreRepository') private storeRepository: StoreRepository,
  ) {}

  async execute(storeIdToBeRemoved: string): Promise<Store> {
    const store = await this.storeRepository.getById(storeIdToBeRemoved);
    return store;
  }
}
export default FindStoreByIdUseCase;
