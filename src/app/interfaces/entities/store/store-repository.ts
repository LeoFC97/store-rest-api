import Store, { CreateStoreData } from './store';

export default interface StoreRepository {
  create(data: CreateStoreData): Promise<Store>;
}
