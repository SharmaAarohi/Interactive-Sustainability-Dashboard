import './config/env';  
import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/databaseConfig';
import authRoutes from './routes/authRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from the frontend (localhost:3000)
app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware
app.use(express.json());


// Routes
app.use('/auth', authRoutes);


// Database connection and server start
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database & tables created!');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });

  console.log('JWT_SECRET:', process.env.JWT_SECRET);  // Should output your JWT_SECRET value
