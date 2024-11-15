// backend/routes/authRoutes.ts
import express, { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { authenticateToken } from '../middleware/authMiddleware';

const router: Router = express.Router();

// Registration route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Protected dashboard route (only accessible with valid token)
router.get('/dashboard', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'Welcome to the protected dashboard route!' });
});

export default router;
