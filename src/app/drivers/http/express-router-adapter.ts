import { Response, NextFunction } from 'express';
import { HttpRequest } from '../../interfaces/http/http';
import Controller from '../../interfaces/http/controller';
import { RequestExpress } from '../../interfaces/http/express';

class ExpressRouterAdapter {
  static adapt(controller: Controller) {
    return async (req: RequestExpress, res: Response, next: NextFunction): Promise<void> => {
      try {
        const httpRequest: HttpRequest = {
          headers: req.headers,
          params: req.params,
          body: req.body,
          query: req.query,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          user: req.user!,
        };
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.status).json(httpResponse.body);
      } catch (err) {
        console.error(err);
        next(err);
      }
    };
  }
}

export const { adapt } = ExpressRouterAdapter;
export default ExpressRouterAdapter;
