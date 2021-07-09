import DeleteStoreByIdUseCase from '../../../../use-cases/store/delete-store-by-id';
import DeleteStoreByIdController from './delete-store-by-id';
import { HttpResponse } from '../../../../interfaces/http/http';
import container from '../../../../container';
import ValidationError from '../../../../errors/validation';
import userMock from '../../../../../test/mocks/user';
import ParamStoreIdValidator from '../../../../validators/param-adjustment-id';

const deleteStoreByIdUseCase: DeleteStoreByIdUseCase = container.resolve(
  DeleteStoreByIdUseCase,
);
const deleteStoreValidator: ParamStoreIdValidator = container.resolve(
  ParamStoreIdValidator,
);
const controller: DeleteStoreByIdController = new DeleteStoreByIdController(
  deleteStoreByIdUseCase,
  deleteStoreValidator,
);

type DeleteStoreByIdParamsType = [storeId: string];
let deleteStoreByIdUseCaseSpy: jest.SpyInstance<Promise<boolean>, DeleteStoreByIdParamsType>;

const makeHttpRequest = (params?: Record<string, string>) => ({
  user: userMock,
  params,
});

const makeSpyOnExecuteUseCase = () => {
  deleteStoreByIdUseCaseSpy = jest.spyOn(deleteStoreByIdUseCase, 'execute');
  deleteStoreByIdUseCaseSpy.mockImplementation(
    async () => new Promise((resolve) => resolve(true)),
  );
};

describe('Delete store by id controller', () => {
  beforeEach(async () => {
    makeSpyOnExecuteUseCase();
  });

  test('Should throw validation error if store id is not present', async () => {
    await expect(() => controller.handle(makeHttpRequest())).rejects.toThrow(ValidationError);
  });

  test('Should throw validation error if store id is empty', async () => {
    await expect(controller.handle(makeHttpRequest({ storeId: '' }))).rejects.toThrow(ValidationError);
  });

  test('Should return 200 sucess if store is not empty', async () => {
    const { status }: HttpResponse = await controller.handle(makeHttpRequest({ storeId: 'id' }));
    expect(status).toBe(200);
  });

  test('Should call delete store use case with correct store id', async () => {
    await controller.handle(makeHttpRequest({ storeId: 'u1312ui1321aas123dad' }));
    expect(deleteStoreByIdUseCaseSpy).toHaveBeenCalledWith('u1312ui1321aas123dad');
  });

  test('Should throw if delete store use case throws', async () => {
    deleteStoreByIdUseCaseSpy.mockImplementationOnce(
      async () => new Promise((resolve, reject) => reject(new Error())),
    );
    await expect(() => controller.handle(makeHttpRequest())).rejects.toThrow(Error);
  });
});
