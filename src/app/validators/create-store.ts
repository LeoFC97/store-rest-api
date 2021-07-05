import BaseSchemaValidator from './base-schema-validator';
import createStoreJoiSchema from './schemas/create-store';

class CreateStoreValidator extends BaseSchemaValidator {
  constructor(
    schema = createStoreJoiSchema,
  ) {
    super(schema);
  }
}

export default CreateStoreValidator;
