import express from 'express';
import handleDomainErrors from '../../api/http/middlewares/handle-domain-errors';
import router from '../../api/http/router';
import container from '../../container';
import { adapt } from './express-middleware-adapter';
import DecodeTokenMiddleware from '../../api/http/middlewares/token';
import PathNotFoundMiddleware from '../../api/http/middlewares/path-not-found';
import { errorHandler } from './error-handler-express';

const startExpressServer = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(adapt(container.resolve(DecodeTokenMiddleware)));
  app.use('/', router);

  app.use(adapt(container.resolve(PathNotFoundMiddleware)));
  app.use(handleDomainErrors);
  app.use(errorHandler);

  return app;
};

export default startExpressServer;
