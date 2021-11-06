import { Router } from 'express';
import userController from '../controllers/userController';

const router = new Router(),
    { getAllUsers, getOneUser } = userController;

// GET ALL USERS
router.get('/', getAllUsers);

// GET ONE USER
router.get('/:id', getOneUser);

export default router;