import { Schema } from 'joi';
import { injectable } from 'tsyringe';
import SchemaValidator from '../interfaces/schema-validator';
import JoiValidationErrorAdapter from './validation-error-adapter';

@injectable()
class JoiSchemaValidator implements SchemaValidator<Schema> {
  async validate(data: unknown, schema: Schema): Promise<void> {
    try {
      await schema.validateAsync(data);
    } catch (err) {
      throw JoiValidationErrorAdapter.adapt(err);
    }
  }
}

export default JoiSchemaValidator;
