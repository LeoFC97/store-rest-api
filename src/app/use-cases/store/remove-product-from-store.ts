import { inject, injectable } from 'tsyringe';
import UseCase from '../../interfaces/use-case';
import StoreRepository from '../../interfaces/entities/store/store-repository';
import EntityNotFoundError from '../../errors/entity-not-found';
import { ProductToBeRemovedFromStoreUseCaseData } from '../../interfaces/entities/store/store';

@injectable()
class RemoveProductFromStoreUseCase implements UseCase {
  constructor(
    @inject('StoreRepository') private storeRepository: StoreRepository,
  ) {}

  async execute(body: ProductToBeRemovedFromStoreUseCaseData): Promise<boolean> {
    const { productId, storeId } = body;
    const productWasDeleated = await this.storeRepository
      .removeProductFromStore(productId, storeId);
    if (!productWasDeleated) {
      throw new EntityNotFoundError('store not found for this id');
    } else {
      return productWasDeleated;
    }
  }
}
export default RemoveProductFromStoreUseCase;
