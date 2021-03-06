import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import CreateStoreUseCase from '../../../../use-cases/store/create-store';
import CreateStoreValidator from '../../../../validators/create-store';
import { CreateStoreBodyData } from '../../../../interfaces/entities/store/store';

@injectable()
class CreateStoreController implements Controller {
  constructor(
    private createStoreUseCase: CreateStoreUseCase,
    private createStoreValidator: CreateStoreValidator,
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body, user } = httpRequest;
    const data = await this.createStoreValidator
      .validate<CreateStoreBodyData>(body);
    const { _id: storeId } = await this.createStoreUseCase.execute({ store: data, user });
    return {
      body: {
        storeId,
      },
      status: 200,
    };
  }
}

export default CreateStoreController;
