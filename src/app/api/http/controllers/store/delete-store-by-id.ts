import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import DeleteStoreByIdUseCase from '../../../../use-cases/store/delete-store-by-id';
import ParamStoreIdValidator from '../../../../validators/param-adjustment-id';
import { ParamStoreIdData } from '../../../../interfaces/use-cases/create-store';

@injectable()
class ApproveAdjustmentController implements Controller {
  constructor(
    private deleteStoreByIdUseCase: DeleteStoreByIdUseCase,
    private paramStoreIdValidator: ParamStoreIdValidator,
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { params } = httpRequest;

    const paramStoreId = await this.paramStoreIdValidator
      .validate<ParamStoreIdData>(params);
    console.log(paramStoreId);
    await this.deleteStoreByIdUseCase.execute(paramStoreId.storeId);
    return {
      status: 200,
    };
  }
}

export default ApproveAdjustmentController;
