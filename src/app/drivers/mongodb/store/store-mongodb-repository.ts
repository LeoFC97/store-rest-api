import {
  Document,
  Model,
  model,
} from 'mongoose';
import StoreRepository from '../../../interfaces/entities/store/store-repository';
import StoreSchema from './store-schema';
import Store, { CreateStoreData } from '../../../interfaces/entities/store/store';

type StoreDoc = Store & Document;
class StoreMongoDBRepository implements StoreRepository {
  private model: Model<StoreDoc>;

  constructor() {
    this.model = model('Store', StoreSchema);
  }

  async create(storeToBeCreated: CreateStoreData): Promise<Store> {
    const storeCreated = await this.model.create(storeToBeCreated);
    return storeCreated;
  }
}

export default StoreMongoDBRepository;