import { Router } from 'express';

import {
  getVerifications,
  getVerification,
  updateVerification,
} from '../controllers/verification.controller.js';

const router = Router();

router.get('/', getVerifications);

router.get('/:id', getVerification);

router.patch('/:id', updateVerification);

export default router;

