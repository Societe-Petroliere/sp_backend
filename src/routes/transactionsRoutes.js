import { Router } from 'express';
import transactionController from '../controllers/transactionController';

const router = new Router(),
    { getAllTransactions } = transactionController;

// GET ALL TRANSACTIONS
router.get('/', getAllTransactions);

export default router;
