import { ObjectId } from 'mongodb';
import Product from '../product/product';
import User from '../../user/user';

export default interface Store {
  _id: ObjectId,
  name: string,
  pictureUrL:string,
  address: StoreAddress,
  products?: Product[], // todo: array of products using product interface with an array
  createdAt: Date,
  updatedAt: Date,
  createdBy: User,
}

export interface StoreAddress {
  cep: string,
  street: string,
  number: number,
  complement?: string,
}

export interface CreateStoreData {
  name: string,
  address: StoreAddress,
  pictureUrL: string,
  createdBy: User
}

export interface CreateStoreBodyData {
  name: string,
  pictureUrL:string,
  address: StoreAddress,
}
export interface CreateStoreUseCaseData {
  store: CreateStoreBodyData,
  user: User,
}

export interface ProductToBeAddedToStoreUseCaseData {
  productId: string,
  storeId: string,
  user: User,
}
export interface ProductToBeRemovedFromStoreUseCaseData {
  productId: string,
  storeId: string,
  user: User,
}

export interface ProductToBeAddedToStoreBodyData {
  productId: string,
  storeId: string,
}
