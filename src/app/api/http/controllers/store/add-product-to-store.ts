import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import AddProductToStoreUseCase from '../../../../use-cases/store/add-product-to-store';
import AddProductToStoreValidator from '../../../../validators/add-product-to-store';
import { ProductToBeAddedToStoreBodyData } from '../../../../interfaces/entities/store/store';

@injectable()
class AddProductToStoreController implements Controller {
  constructor(
    private addProductToStoreUseCase: AddProductToStoreUseCase,
    private addProductToStoreValidator: AddProductToStoreValidator,
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body, user } = httpRequest;
    const data = await this.addProductToStoreValidator
      .validate<ProductToBeAddedToStoreBodyData>(body);
    const { storeId, productId } = data;
    await this.addProductToStoreUseCase.execute({ storeId, productId, user });
    return {
      status: 200,
    };
  }
}

export default AddProductToStoreController;
