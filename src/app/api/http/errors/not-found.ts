import BaseError from 'app/errors/base';
import { Request } from 'express';
import BaseHttpError from './base';

export default class NotFoundHttpError extends BaseHttpError {
  public status = 404;
  public code = 'NotFound';
  public message: string;
  public name: string;

  constructor(error: BaseError) {
    super();
    this.message = error.message;
    this.name = `error.${this.code}`;
  }
}
