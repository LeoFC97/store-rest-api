import express from 'express';
import container from '../../container';
import { adapt } from '../../drivers/http/express-router-adapter';

import HealthController from './controllers/health';

import CreateStoreController from './controllers/store/create-store';
import ListAllStoresController from './controllers/store/list-all-stores';
import DeleteStoreByIdController from './controllers/store/delete-store-by-id';
import FindStoreByIdController from './controllers/store/find-store';
import AddProductToStoreController from './controllers/store/add-product-to-store';
import RemoveProductFromStoreController from './controllers/store/remove-product-from-store';


import CreateProductController from './controllers/product/create-product';

const router = express.Router();

router.get('/health', adapt(container.resolve(HealthController)));
router.get('/stores', adapt(container.resolve(ListAllStoresController)));
router.post('/store', adapt(container.resolve(CreateStoreController)));
router.get('/store/:storeId', adapt(container.resolve(FindStoreByIdController)));
router.post('/store/add-product', adapt(container.resolve(AddProductToStoreController)));
router.delete('/store/remove-product', adapt(container.resolve(RemoveProductFromStoreController)));
router.delete('/store/:storeId', adapt(container.resolve(DeleteStoreByIdController)));


router.post('/product', adapt(container.resolve(CreateProductController)));

export default router;
