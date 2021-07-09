import Store from 'app/interfaces/entities/store/store';
import ListStoresUseCase from '../../../../use-cases/store/list-stores';
import ListAllStoresController from './list-all-stores';
import { HttpResponse } from '../../../../interfaces/http/http';
import container from '../../../../container';
import ValidationError from '../../../../errors/validation';
import userMock from '../../../../../test/mocks/user';
import { arrayOfStores } from '../../../../../test/mocks/store';

const listStoresUseCase: ListStoresUseCase = container.resolve(
  ListStoresUseCase,
);

const controller: ListAllStoresController = new ListAllStoresController(
  listStoresUseCase,
);

let listAllStoresUseCaseSpy: jest.SpyInstance<Promise<Store[]>>;

const makeHttpRequest = (params?: Record<string, string>) => ({
  user: userMock,
  params,
});

const makeSpyOnExecuteUseCase = () => {
  listAllStoresUseCaseSpy = jest.spyOn(listStoresUseCase, 'execute');
  listAllStoresUseCaseSpy.mockImplementation(
    async () => new Promise((resolve) => resolve(arrayOfStores)),
  );
};

describe('List all stores controller', () => {
  beforeEach(async () => {
    makeSpyOnExecuteUseCase();
  });

  test('Should return 200 sucess if store is not empty', async () => {
    const { status }: HttpResponse = await controller.handle();
    expect(status).toBe(200);
  });

  test('Should throw if delete store use case throws', async () => {
    listAllStoresUseCaseSpy.mockImplementationOnce(
      async () => new Promise((resolve, reject) => reject(new Error())),
    );
    await expect(() => controller.handle()).rejects.toThrow(Error);
  });
});
