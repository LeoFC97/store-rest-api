import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import CreateProductUseCase from '../../../../use-cases/product/create-product';
import CreateProductValidator from '../../../../validators/create-product';
import { CreateProductBodyData } from '../../../../interfaces/entities/product/product';

@injectable()
class CreateProductController implements Controller {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private createProductValidator: CreateProductValidator,
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body, user } = httpRequest;
    const data = await this.createProductValidator
      .validate<CreateProductBodyData>(body);
    const { _id: productId } = await this.createProductUseCase.execute({ product: data, user });
    return {
      body: {
        productId,
      },
      status: 200,
    };
  }
}

export default CreateProductController;
