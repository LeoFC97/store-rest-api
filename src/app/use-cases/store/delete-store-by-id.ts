import { inject, injectable } from 'tsyringe';
import UseCase from '../../interfaces/use-case';
import StoreRepository from '../../interfaces/entities/store/store-repository';
import EntityNotFoundError from '../../errors/entity-not-found';

@injectable()
class DeleteStoreByIdUseCase implements UseCase {
  constructor(
    @inject('StoreRepository') private storeRepository: StoreRepository,
  ) {}

  async execute(storeIdToBeRemoved: string): Promise<boolean> {
    const storeWasDeleated = await this.storeRepository.deleteById(storeIdToBeRemoved);
    console.log(storeWasDeleated);
    if (!storeWasDeleated) {
      throw new EntityNotFoundError('store not found for this id');
    } else {
      return storeWasDeleated;
    }
  }
}
export default DeleteStoreByIdUseCase;
