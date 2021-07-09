import { inject, injectable } from 'tsyringe';
import Store from 'app/interfaces/entities/store/store';
import UseCase from '../../interfaces/use-case';
import StoreRepository from '../../interfaces/entities/store/store-repository';

@injectable()
class ListStoresUseCase implements UseCase {
  constructor(
    @inject('StoreRepository') private storeRepository: StoreRepository,
  ) {}

  async execute(): Promise<Store[]> {
    const stores = await this.storeRepository.listAll();
    return stores;
  }
}
export default ListStoresUseCase;
