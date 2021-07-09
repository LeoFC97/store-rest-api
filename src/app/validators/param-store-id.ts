import BaseSchemaValidator from './base-schema-validator';
import StoreIdJoiSchema from './schemas/param-store-id';

class ParamStoreIdValidator extends BaseSchemaValidator {
  constructor(
    schema = StoreIdJoiSchema,
  ) {
    super(schema);
  }
}

export default ParamStoreIdValidator;
