import BaseSchemaValidator from './base-schema-validator';
import createProductSchema from './schemas/create-product';

class CreateProductValidator extends BaseSchemaValidator {
  constructor(
    schema = createProductSchema,
  ) {
    super(schema);
  }
}

export default CreateProductValidator;
