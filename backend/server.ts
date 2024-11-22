import './config/env';  
import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/databaseConfig';
import authRoutes from './routes/authRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:3000', // Local frontend
  'https://sustainabilitydashboard3.netlify.app', // Deployed frontend
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow specific origins or requests without origin (e.g., Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, origin); // Set `Access-Control-Allow-Origin` to match the origin dynamically
      } else {
        console.error(`Blocked by CORS: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // Allow cookies and credentials
  })
);


// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url} with body:`, req.body);
  next();
});

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
