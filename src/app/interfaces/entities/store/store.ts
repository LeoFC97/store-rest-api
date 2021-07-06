import { ObjectId } from 'mongodb';
import User from '../../user/user';

export default interface Store {
  _id: ObjectId,
  name: string,
  pictureUrL:string,
  address: StoreAddress,
  products?: string, // todo: array of products using product interface with an array
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
