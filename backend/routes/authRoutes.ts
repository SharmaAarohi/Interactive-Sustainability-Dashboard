import express, { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';

const router: Router = express.Router();

// Registration route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

export default router;