"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
// Registration route
router.post('/register', authController_1.registerUser);
// Login route
router.post('/login', authController_1.loginUser);
// Protected dashboard route (only accessible with valid token)
router.get('/dashboard', authMiddleware_1.authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Welcome to the protected dashboard route!' });
});
exports.default = router;
