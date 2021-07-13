import BaseSchemaValidator from './base-schema-validator';
import addProductToStoreJoiSchema from './schemas/add-product-to-store';

class CreateStoreValidator extends BaseSchemaValidator {
  constructor(
    schema = addProductToStoreJoiSchema,
  ) {
    super(schema);
  }
}

export default CreateStoreValidator;
