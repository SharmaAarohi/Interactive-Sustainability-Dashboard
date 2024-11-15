// backend/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Access denied, token missing!' });
    return; // Ensure that this path returns void
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      res.status(403).json({ message: 'Invalid token!' });
      return; // Ensure that this path returns void
    }

    (req as any).user = user; // Optionally add user data to req object
    next(); // Ensure this path calls next() without returning anything
  });
};
