import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { sendResponse } from '../utils/responseHandler';

// Registration controller
// export const registerUser = async (req: Request, res: Response): Promise<void> => {
//   const { email, password } = req.body;
//   console.log('JWT_SECRET:', process.env.JWT_SECRET); // Add this line in registerUser or loginUser

//   try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//       res.status(400).json({ message: 'User already exists' });
//       return;
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create user
//     const newUser = await User.create({ email, password: hashedPassword });

//     // Generate JWT
//     const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET as string, {
//       expiresIn: '1h',
//     });

//     res.status(201).json({ message: 'User registered successfully', token });
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ message: 'Error registering user', error });
//   }
// };


export const registerUser = async (req: Request, res: Response): Promise<void> => {
  console.log('Request body:', req.body); // Logs the request payload
  const { email, password } = req.body;
  console.log('JWT_SECRET:', process.env.JWT_SECRET); // Logs JWT_SECRET value
  console.log('Incoming register request:', req.body);
  try {
    console.log('Checking if user exists with email:', email); // Log email being checked
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      console.log('User already exists:', existingUser); // Log the existing user details
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    console.log('Hashing password for email:', email); // Log before hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log('Creating new user with email:', email); // Log before creating user
    const newUser = await User.create({ email, password: hashedPassword });

    console.log('New user created:', newUser.toJSON()); // Log newly created user details

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    });

    console.log('JWT generated for user:', newUser.id); // Log JWT generation
    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Error during registration:', error); // Log the error
    res.status(500).json({ message: 'Error registering user', error });
  }
};


// Login controller
// export const loginUser = async (req: Request, res: Response): Promise<void> => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ where: { email } });
//     if (!user) {
//       res.status(400).json({ message: 'User not found' });
//       return;
//     }

//     // Verify password
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       res.status(400).json({ message: 'Invalid credentials' });
//       return;
//     }

//     // Generate JWT
//     const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
//       expiresIn: '1h',
//     });

//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(500).json({ message: 'Error logging in', error });
//   }
// };

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    console.log('Checking if user exists with email:', email); // Log email being checked
    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.log('User not found with email:', email); // Log missing user
      res.status(400).json({ message: 'User not found' });
      return;
    }

    console.log('Verifying password for email:', email); // Log before password verification
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log('Invalid password for user:', email); // Log invalid password attempt
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    console.log('Generating JWT for user:', user.id); // Log before generating JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    });

    console.log('JWT generated for user:', user.id); // Log successful JWT generation
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error); // Log the error
    res.status(500).json({ message: 'Error logging in', error });
  }
};
