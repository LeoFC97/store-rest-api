import express from 'express';
import container from '../../container';
import { adapt } from '../../drivers/http/express-router-adapter';

import HealthController from './controllers/health';
import CreateStoreController from './controllers/store/create-store';
import ListAllStoresController from './controllers/store/list-all-stores';
import DeleteStoreByIdController from './controllers/store/delete-store-by-id';
import FindStoreByIdController from './controllers/store/find-store';

const router = express.Router();

router.get('/health', adapt(container.resolve(HealthController)));
router.get('/stores', adapt(container.resolve(ListAllStoresController)));
router.post('/store', adapt(container.resolve(CreateStoreController)));
router.delete('/store/:storeId', adapt(container.resolve(DeleteStoreByIdController)));
router.get('/store/:storeId', adapt(container.resolve(FindStoreByIdController)));

export default router;
