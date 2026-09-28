import { Router } from 'express';

import {
  getSelections,
  getSelection,
  createSelectionData,
  updateSelectionData,
  getRanking,
} from '../controllers/selection.controller.js';

const router = Router();

router.get('/', getSelections);

router.get('/ranking', getRanking);

router.get('/:id', getSelection);

router.post('/', createSelectionData);

router.patch('/:id', updateSelectionData);

export default router;

