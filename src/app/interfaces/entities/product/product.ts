import { ObjectId } from 'mongodb';
import User from '../../user/user';

export default interface Product {
  _id: ObjectId,
  name: string,
  pictureUrL:string,
  price: number,
  category: string,
  createdAt: Date,
  updatedAt: Date,
  createdBy: User,
}

export interface CreateProductData {
  name: string,
  pictureUrL: string,
  price: number,
  category: string,
  createdBy: User,
}

export interface CreateProductBodyData {
  name: string,
  pictureUrL: string,
  price: number,
  category: string,
}
export interface CreateProductUseCaseData {
  product: CreateProductBodyData,
  user: User,
}
