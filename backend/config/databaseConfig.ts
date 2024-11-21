// import { Sequelize } from 'sequelize';

// const sequelize = new Sequelize(
//   process.env.DB_NAME || 'sustainability_dashboard',
//   process.env.DB_USER || 'oren',
//   process.env.DB_PASS || 'root123',
//   {
//     host: process.env.DB_HOST || 'localhost',
//     dialect: 'postgres',
//     logging: false,
//   }
// );

// export default sequelize;

import { Sequelize } from 'sequelize';

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      logging: false, // Disable logging in production
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Allows self-signed certificates
        },
      },
    })
  : new Sequelize(
      process.env.DB_NAME || 'sustainability_dashboard',
      process.env.DB_USER || 'oren',
      process.env.DB_PASS || 'root123',
      {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        logging: false, // Optional: Disable logging
        dialectOptions: process.env.NODE_ENV === 'production' 
          ? {
              ssl: {
                require: true,
                rejectUnauthorized: false,
              },
            }
          : undefined, // No SSL in development
      }
    );

export default sequelize;
