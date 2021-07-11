import BaseError from '../../../errors/base';
import BaseHttpError from './base';

export default class InternalServerHttpError extends BaseHttpError {
  public status = 500;
  public code = 'InternalServerError';
  public message: string;
  public name: string;

  constructor(error: BaseError) {
    super();
    this.message = error.message;
    this.name = `error.${this.code}`;
  }
}
