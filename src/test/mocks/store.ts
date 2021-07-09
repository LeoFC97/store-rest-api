import { ObjectId } from 'mongodb';
import Store, { CreateStoreBodyData, CreateStoreUseCaseData } from 'app/interfaces/entities/store/store';
import mockUser from './user';
import { validAdress } from './address';

export const arrayOfStores :Store[] = [
  {
    _id: new ObjectId('60c3ca93aea1c953388aa07b'),
    name: 'Store 2',
    pictureUrL: 'www.urlForMocking.com',
    address: validAdress,
    createdBy: mockUser,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new ObjectId('60c3ca13ae21c933388aa07b'),
    name: 'Store 1',
    pictureUrL: 'www.urlForMocking.com',
    address: validAdress,
    createdBy: mockUser,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

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
