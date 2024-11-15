import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
console.log("Loaded JWT_SECRET:", process.env.JWT_SECRET);  // Check if JWT_SECRET is loaded here