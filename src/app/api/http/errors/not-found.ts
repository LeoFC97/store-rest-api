import BaseError from 'app/errors/base';
import BaseHttpError from './base';

export default class NotFoundHttpError extends BaseHttpError {
  public status = 404;
  public code = 'NotFound';
  public message: string;

  constructor(error: BaseError) {
    super();
    this.message = error.message;
  }
}
