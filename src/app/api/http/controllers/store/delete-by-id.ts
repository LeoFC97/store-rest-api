import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import DeleteStoreByIdUseCase from '../../../../use-cases/store/delete-store-by-id';

@injectable()
class ApproveAdjustmentController implements Controller {
  constructor(
    private deleteStoreByIdUseCase: DeleteStoreByIdUseCase,
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { params } = httpRequest;
    console.log(params);

    await this.deleteStoreByIdUseCase.execute('params');
    return {
      status: 200,
    };
  }
}

export default ApproveAdjustmentController;
