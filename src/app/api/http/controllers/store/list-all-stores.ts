import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpResponse } from '../../../../interfaces/http/http';
import ListStoresUseCase from '../../../../use-cases/store/list-stores';

@injectable()
class ListAllNameController implements Controller {
  constructor(
    private listStoresUseCase: ListStoresUseCase,
  ) {}
  async handle(): Promise<HttpResponse> {
    const allStores = await this.listStoresUseCase.execute();
    return {
      body: allStores,
      status: 200,
    };
  }
}

export default ListAllNameController;
