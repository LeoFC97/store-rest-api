import { inject, injectable } from 'tsyringe';
import UseCase from '../../interfaces/use-case';
import StoreRepository from '../../interfaces/entities/store/store-repository';
import Store, { CreateStoreUseCaseData, CreateStoreData } from '../../interfaces/entities/store/store';

@injectable()
class CreateStoreUseCase implements UseCase {
  constructor(
    @inject('StoreRepository') private storeRepository: StoreRepository,
  ) {}

  async execute(storeToBeCreated: CreateStoreUseCaseData): Promise<Store> {
    const storeObject: CreateStoreData = {
      name: storeToBeCreated.store.name,
      pictureUrL: storeToBeCreated.store.pictureUrL,
      address: storeToBeCreated.store.address,
      createdBy: storeToBeCreated.user,
    };
    const storeCreated = await this.storeRepository.create(storeObject);
    return storeCreated;
  }
}
export default CreateStoreUseCase;
