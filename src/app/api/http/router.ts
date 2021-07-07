import express from 'express';
import container from '../../container';
import { adapt } from '../../drivers/http/express-router-adapter';

import HealthController from './controllers/health';
import CreateStoreController from './controllers/store/create-store';
import ListAllStoresNameController from './controllers/store/list-all-stores-name';

const router = express.Router();

router.get('/health', adapt(container.resolve(HealthController)));
router.get('/stores', adapt(container.resolve(ListAllStoresNameController)));
router.post('/store', adapt(container.resolve(CreateStoreController)));

export default router;
