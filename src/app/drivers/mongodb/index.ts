import MongoDBManager from './mongodb-manager';
import { mongodb } from '../../../config/enviroment';

export default function start(): void {
  MongoDBManager.initialize(mongodb.uri);
}
