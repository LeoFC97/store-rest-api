import { ObjectId } from 'mongodb';
import { CreateProductData, CreateProductBodyData, CreateProductUseCaseData } from 'app/interfaces/entities/product/product';
import mockUser from './user';

export const createProductData: CreateProductData = {
  name: 'Mocked Product',
  pictureUrL: 'www.urlForMocking.com',
  price: 3990,
  category: 'PIZZA',
  createdBy: mockUser,
};

export const createProductBodyDataMock: CreateProductBodyData = {
  name: 'Product name for testing',
  pictureUrL: 'www.urlForMocking.com',
  category: 'TACOS',
  price: 1200,
};

export const createProductUseCaseDataMock: CreateProductUseCaseData = {
  product: createProductBodyDataMock,
  user: mockUser,
};

export default {
  _id: new ObjectId('60a3ca93a2a1c953388aa07b'),
  name: 'Pizza mocked for testing',
  price: 7990,
  category: 'PIZZA',
  pictureUrL: 'www.urlForMocking.com',
  createdBy: mockUser,
  createdAt: new Date(),
  updatedAt: new Date(),
};
