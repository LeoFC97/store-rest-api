import Store, { CreateStoreData } from './store';

export default interface StoreRepository {
  create(data: CreateStoreData): Promise<Store>;
  deleteById(storeString: string): Promise<boolean>;
  listAll(): Promise<Store[]>;
}
