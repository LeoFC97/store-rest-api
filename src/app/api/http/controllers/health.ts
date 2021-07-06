import Controller from '../../../interfaces/http/controller';
import { HttpResponse } from '../../../interfaces/http/http';
import MongoDBManager from '../../../drivers/mongodb/mongodb-manager';

class HealthController implements Controller {
  async handle(): Promise<HttpResponse> {
    try {
      const mongoDbConnection : boolean = MongoDBManager.isConnected();
      const httpResponse: HttpResponse = {
        body: {
          mongoDbStatus: mongoDbConnection,
          datetime: new Date(),
        },
        status: mongoDbConnection ? 200 : 500,
      };
      return httpResponse;
    } catch (err) {
      return {
        body: {
          err,
        },
        status: 500,
      };
    }
  }
}

export default HealthController;
