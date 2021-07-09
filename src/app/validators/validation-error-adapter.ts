import { ValidationError as JoiValidationError, ValidationErrorItem } from 'joi';
import { injectable } from 'tsyringe';
import ValidationError from '../errors/validation';

@injectable()
export default class JoiValidationErrorAdapter {
  public static formatMessage(detail: ValidationErrorItem): string {
    if (!detail.context) {
      throw new Error('Error details do not have context property.');
    }

    const { message } = detail;

    return message;
  }

  public static adapt(error: JoiValidationError): ValidationError {
    const { details } = error;
    const [detail] = details;

    const message = JoiValidationErrorAdapter.formatMessage(detail);

    const validationError = new ValidationError(message);

    return validationError;
  }
}
