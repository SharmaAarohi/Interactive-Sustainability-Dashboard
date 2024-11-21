// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// require("./config/env");
// const express_1 = __importDefault(require("express"));
// const dotenv_1 = __importDefault(require("dotenv"));
// const databaseConfig_1 = __importDefault(require("./config/databaseConfig"));
// const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
// const cors_1 = __importDefault(require("cors"));
// dotenv_1.default.config();
// const app = (0, express_1.default)();
// const PORT = process.env.PORT || 5000;
// // Allow requests from the frontend (localhost:3000)
// app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
// // Middleware
// app.use(express_1.default.json());
// // Routes
// app.use('/auth', authRoutes_1.default);
// // Database connection and server start
// databaseConfig_1.default.sync({ alter: true })
//     .then(() => {
//     console.log('Database & tables created!');
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });
// })
//     .catch((error) => {
//     console.error('Error connecting to database:', error);
// });
// console.log('JWT_SECRET:', process.env.JWT_SECRET); // Should output your JWT_SECRET value

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/env");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const databaseConfig_1 = __importDefault(require("./config/databaseConfig"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;

// Redirect HTTP to HTTPS in production
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && !req.secure) {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

// Allow requests from the frontend (localhost:3000)
app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));

// Middleware
app.use(express_1.default.json());

// Routes
app.use('/auth', authRoutes_1.default);

// Database connection and server start
databaseConfig_1.default.sync({ alter: true })
    .then(() => {
        console.log('Database & tables created!');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to database:', error);
    });

console.log('JWT_SECRET:', process.env.JWT_SECRET); // Should output your JWT_SECRET value
