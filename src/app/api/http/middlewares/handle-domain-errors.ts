import { Request, Response, NextFunction } from 'express';
import InternalServerHttpError from '../errors/internal';
import ValidationError from '../../../errors/validation';
import BadRequestHttpError from '../errors/bad-request';
import ResourceNotFoundError from '../../../errors/resource-not-found';
import NotFoundHttpError from '../errors/not-found';
import EntityNotFoundError from '../../../errors/entity-not-found';

export default (error: Error, req: Request, _res: Response, next: NextFunction): void => {
  if (error instanceof ValidationError) return next(new BadRequestHttpError(error));

  if (error instanceof ResourceNotFoundError) return next(new NotFoundHttpError(error));

  if (error instanceof EntityNotFoundError) return next(new NotFoundHttpError(error));

  return next(new InternalServerHttpError(error));
};
