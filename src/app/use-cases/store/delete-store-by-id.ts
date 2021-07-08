import { inject, injectable } from 'tsyringe';
import UseCase from '../../interfaces/use-case';
import StoreRepository from '../../interfaces/entities/store/store-repository';

@injectable()
class DeleteStoreByIdUseCase implements UseCase {
  constructor(
    @inject('StoreRepository') private storeRepository: StoreRepository,
  ) {}

  async execute(storeIdToBeRemoved: string): Promise<boolean> {
    const storeCreated = await this.storeRepository.deleteById(storeIdToBeRemoved);
    return storeCreated;
  }
}
export default DeleteStoreByIdUseCase;
