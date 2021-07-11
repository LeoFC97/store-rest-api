import {
  Document,
  Model,
  model,
} from 'mongoose';
import ProductRepository from '../../../interfaces/entities/product/product-repository';
import ProductSchema from './product-schema';
import Product, { CreateProductData } from '../../../interfaces/entities/product/product';

type ProductDoc = Product & Document;
class ProductMongoDBRepository implements ProductRepository {
  private model: Model<ProductDoc>;

  constructor() {
    this.model = model('Product', ProductSchema);
  }

  async create(productToBeCreated: CreateProductData): Promise<Product> {
    const productCreated = await this.model.create(productToBeCreated);
    return productCreated;
  }
}

export default ProductMongoDBRepository;
