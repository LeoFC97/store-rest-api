import Product, { CreateProductData } from './product';

export default interface StoreRepository {
  create(data: CreateProductData): Promise<Product>;
}
