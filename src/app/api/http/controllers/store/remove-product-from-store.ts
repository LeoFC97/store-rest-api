import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import RemoveProductFromStoreUseCase from '../../../../use-cases/store/remove-product-from-store';
import RemoveProductFromStoreValidator from '../../../../validators/remove-product-from-store';
import { ParamProductIdData } from '../../../../interfaces/use-cases/product';

@injectable()
class RemoveProductFromStoreController implements Controller {
  constructor(
    private removeProductFromStoreUseCase: RemoveProductFromStoreUseCase,
    private removeProductFromStoreValidator: RemoveProductFromStoreValidator,
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body, user } = httpRequest;
    const data = await this.removeProductFromStoreValidator
      .validate<ParamProductIdData>(body);
    const { storeId, productId } = data;
    await this.removeProductFromStoreUseCase.execute({ storeId, productId, user });
    return {
      status: 200,
    };
  }
}

export default RemoveProductFromStoreController;
