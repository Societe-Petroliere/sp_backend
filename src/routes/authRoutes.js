import { Router } from 'express';
import authController from '../controllers/authController';

const router = new Router(),
    { signup } = authController;

// CERATE A USER ROUTE
router.post('/signup', signup);

export default router;
