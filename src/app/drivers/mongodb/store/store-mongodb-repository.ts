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
  async listAll(): Promise<Store[]> {
    const stores = await this.model.find();
    return stores;
  }
  async deleteById(storeId: string): Promise<boolean> {
    const storeRemoved = await this.model.findOneAndRemove({ _id: storeId });
    if (storeRemoved) {
      return true;
    }
    return false;
  }
  async getById(storeId: string): Promise<Store> {
    const store = await this.model.findOne({ _id: storeId });
    return store as Store;
  }
}

export default StoreMongoDBRepository;
