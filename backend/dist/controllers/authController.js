"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
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
const registerUser = async (req, res) => {
    const { email, password } = req.body;
    console.log('JWT_SECRET:', process.env.JWT_SECRET); // Logs JWT_SECRET value
    console.log('Incoming register request:', req.body);
    try {
        console.log('Checking if user exists with email:', email); // Log email being checked
        const existingUser = await User_1.default.findOne({ where: { email } });
        if (existingUser) {
            console.log('User already exists:', existingUser); // Log the existing user details
            res.status(400).json({ message: 'User already exists' });
            return;
        }
        console.log('Hashing password for email:', email); // Log before hashing
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        console.log('Creating new user with email:', email); // Log before creating user
        const newUser = await User_1.default.create({ email, password: hashedPassword });
        console.log('New user created:', newUser.toJSON()); // Log newly created user details
        const token = jsonwebtoken_1.default.sign({ id: newUser.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        console.log('JWT generated for user:', newUser.id); // Log JWT generation
        res.status(201).json({ message: 'User registered successfully', token });
    }
    catch (error) {
        console.error('Error during registration:', error); // Log the error
        res.status(500).json({ message: 'Error registering user', error });
    }
};
exports.registerUser = registerUser;
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
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log('Checking if user exists with email:', email); // Log email being checked
        const user = await User_1.default.findOne({ where: { email } });
        if (!user) {
            console.log('User not found with email:', email); // Log missing user
            res.status(400).json({ message: 'User not found' });
            return;
        }
        console.log('Verifying password for email:', email); // Log before password verification
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            console.log('Invalid password for user:', email); // Log invalid password attempt
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }
        console.log('Generating JWT for user:', user.id); // Log before generating JWT
        const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        console.log('JWT generated for user:', user.id); // Log successful JWT generation
        res.status(200).json({ message: 'Login successful', token });
    }
    catch (error) {
        console.error('Error during login:', error); // Log the error
        res.status(500).json({ message: 'Error logging in', error });
    }
};
exports.loginUser = loginUser;
