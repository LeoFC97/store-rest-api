import express from 'express';
import router from '../../api/http/router';
import container from '../../container';
import { adapt } from './express-middleware-adapter';
import DecodeTokenMiddleware from '../../api/http/middlewares/token';
import PathNotFoundMiddleware from '../../api/http/middlewares/path-not-found';
import handleDomainErrors from '../../api/http/middlewares/handle-domain-errors';

const startExpressServer = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(adapt(container.resolve(DecodeTokenMiddleware)));
  app.use('/', router);
  app.use(adapt(container.resolve(PathNotFoundMiddleware)));
  app.use(handleDomainErrors);

  return app;
};

export default startExpressServer;
