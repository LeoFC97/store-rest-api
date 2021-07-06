import { container } from 'tsyringe';
import JoiSchemaValidator from './validators/joi-schema-validator';
import StoreMongoDBRepository from './drivers/mongodb/store/store-mongodb-repository';
import JwtTokenManager from './drivers/http/jwt-token-manager';

export default container;

container.register('SchemaValidator', {
  useClass: JoiSchemaValidator,
});

container.register('StoreRepository', {
  useClass: StoreMongoDBRepository,
});

container.register('TokenManager', {
  useClass: JwtTokenManager,
});
