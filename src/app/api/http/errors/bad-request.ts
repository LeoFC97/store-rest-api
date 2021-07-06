import BaseError from 'app/errors/base';
import BaseHttpError from './base';

export default class BadRequestHttpError extends BaseHttpError {
  public status = 400;
  public code = 'BadRequest';
  public message: string;

  constructor(error: BaseError) {
    super();
    this.message = error.message;
  }
}
