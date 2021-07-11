import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import FindStoreByIdUseCase from '../../../../use-cases/store/find-store-by-id';
import ParamStoreIdValidator from '../../../../validators/param-store-id';
import { ParamStoreIdData } from '../../../../interfaces/use-cases/create-store';

@injectable()
class FindStoreByIdController implements Controller {
  constructor(
    private findStoreByIdUseCase: FindStoreByIdUseCase,
    private paramStoreIdValidator: ParamStoreIdValidator,
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { params } = httpRequest;

    const paramStoreId = await this.paramStoreIdValidator
      .validate<ParamStoreIdData>(params);
    await this.findStoreByIdUseCase.execute(paramStoreId.storeId);
    return {
      status: 200,
    };
  }
}

export default FindStoreByIdController;
