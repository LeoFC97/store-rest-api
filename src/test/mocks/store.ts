import mockUser from './user';
import { validAdress } from './address';

// eslint-disable-next-line import/prefer-default-export
export const createStoreData = {
  name: 'Store name for testing',
  pictureUrL: 'www.urlForMocking.com',
  createdBy: mockUser,
  address: validAdress,
};
