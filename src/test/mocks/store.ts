import { ObjectId } from 'mongodb';
import { CreateStoreBodyData, CreateStoreUseCaseData } from 'app/interfaces/entities/store/store';
import mockUser from './user';
import { validAdress } from './address';

export const createStoreData = {
  name: 'Store name for testing',
  pictureUrL: 'www.urlForMocking.com',
  createdBy: mockUser,
  address: validAdress,
};

export const createStoreBodyDataMock: CreateStoreBodyData = {
  address: validAdress,
  name: 'Store name for testing',
  pictureUrL: 'www.urlForMocking.com',
};

export const createStoreUseCaseDataMock: CreateStoreUseCaseData = {
  store: createStoreBodyDataMock,
  user: mockUser,
};

export default {
  _id: new ObjectId('60c3ca93aea1c953388aa07b'),
  name: 'Store name for testing',
  pictureUrL: 'www.urlForMocking.com',
  address: validAdress,
  createdBy: mockUser,
  createdAt: new Date(),
  updatedAt: new Date(),
};
