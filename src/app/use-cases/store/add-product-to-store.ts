import { inject, injectable } from 'tsyringe';
import UseCase from '../../interfaces/use-case';
import StoreRepository from '../../interfaces/entities/store/store-repository';
import { ProductToBeAddedToStoreUseCaseData, CreateStoreData } from '../../interfaces/entities/store/store';
import EntityNotFoundError from '../../errors/entity-not-found';

@injectable()
class AddProductToStoreUseCase implements UseCase {
  constructor(
    @inject('StoreRepository') private storeRepository: StoreRepository,
  ) {}

  async execute(body: ProductToBeAddedToStoreUseCaseData): Promise<boolean> {
    const { productId, storeId } = body;
    const productWasAdded : boolean = await this.storeRepository
      .addProductToArrayOfProducts(productId, storeId);
    if (!productWasAdded) {
      throw new EntityNotFoundError('store not found for this id');
    } else {
      return true;
    }
    return productWasAdded;
  }
}
export default AddProductToStoreUseCase;
