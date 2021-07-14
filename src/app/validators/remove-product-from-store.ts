import BaseSchemaValidator from './base-schema-validator';
import removeProductFromStoreJoiSchema from './schemas/remove-product-from-store';

class RemoveProductFromStoreValidator extends BaseSchemaValidator {
  constructor(
    schema = removeProductFromStoreJoiSchema,
  ) {
    super(schema);
  }
}

export default RemoveProductFromStoreValidator;
