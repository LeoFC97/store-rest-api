import { inject, injectable } from 'tsyringe';
import UseCase from '../../interfaces/use-case';
import ProductRepository from '../../interfaces/entities/product/product-repository';
import Product, { CreateProductUseCaseData, CreateProductData } from '../../interfaces/entities/product/product';

@injectable()
class CreateProductUseCase implements UseCase {
  constructor(
    @inject('ProductRepository') private productRepository: ProductRepository,
  ) {}

  async execute(productToBeCreated: CreateProductUseCaseData): Promise<Product> {
    const productObject: CreateProductData = {
      name: productToBeCreated.product.name,
      pictureUrL: productToBeCreated.product.pictureUrL,
      price: productToBeCreated.product.price,
      category: productToBeCreated.product.category,
      createdBy: productToBeCreated.user,
    };
    const productCreated = await this.productRepository.create(productObject);
    return productCreated;
  }
}
export default CreateProductUseCase;
