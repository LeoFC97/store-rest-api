import express from 'express';
import container from '../../container';
import { adapt } from '../../drivers/http/express-router-adapter';

import HealthController from './controllers/health';
import CreateStoreController from './controllers/store/create-store';

const router = express.Router();

router.get('/health', adapt(container.resolve(HealthController)));
router.post('/store', adapt(container.resolve(CreateStoreController)));

export default router;
