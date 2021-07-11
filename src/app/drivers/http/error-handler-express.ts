/* eslint-disable complexity */
import BaseHttpError from 'app/api/http/errors/base';
import { RequestExpress } from 'app/interfaces/http/express';
import { Response, NextFunction } from 'express';
import { service } from '../../../config/enviroment';

class ErrorHandlerExpress {
  // eslint-disable-next-line max-len
  static errorHandler(error: BaseHttpError, _req: RequestExpress, res: Response, _next: NextFunction) : void {
    const defaultName = 'Error';
    const defaultMessage = 'Ocorreu um erro inesperado';

    const statusCode = typeof error.status === 'number' ? error.status : 500;

    res.status(statusCode);
    const { nodeEnv } = service;
    if (nodeEnv === 'production' && (!error.status || error.status >= 500)) {
      res.json({
        errors: [{
          title: defaultName,
          message: defaultMessage,
        }],
      });
    } else {
      res.json({
        errors: [{
          title: error.name || defaultName,
          message: error.message || defaultMessage,
        }],
      });
    }
  }
}
export const { errorHandler } = ErrorHandlerExpress;
export default ErrorHandlerExpress;
