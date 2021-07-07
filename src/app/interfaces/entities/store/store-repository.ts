import { ObjectId } from 'mongoose';
import Store, { CreateStoreData } from './store';

export default interface StoreRepository {
  create(data: CreateStoreData): Promise<Store>;
  deleteById(storeString: ObjectId): Promise<boolean>;
}
