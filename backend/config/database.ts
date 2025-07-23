import { Sequelize, Options } from 'sequelize';
import 'dotenv/config';

const dbUrl = process.env.DATABASE_URL as string;

if (!dbUrl) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const options: Options = {
  dialect: 'postgres',
  logging: false,
};

if (process.env.NODE_ENV === 'production') {
  options.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: true,
    },
  };
}

const sequelize = new Sequelize(dbUrl, options);

export default sequelize;

// import { Sequelize } from 'sequelize';
// import 'dotenv/config';

// // const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
// //   dialect: 'postgres',
// //   logging: false, // Set to true for debugging
// // });

// // export default sequelize;

// const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
//   dialect: 'postgres',
//   logging: false, // Optional: Set to true to log queries
//   dialectOptions: {
//     ssl: {
//       require: true, // Enforce SSL
//       rejectUnauthorized: false, // Allows self-signed certificates
      
//     },
//   },
// });

// export default sequelize;


// // const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
// //     host: process.env.DB_HOST,
// //     port: parseInt(process.env.DB_PORT || '5432', 10),
// //     dialect: 'postgres',
// //     dialectOptions: {
// //         ssl: {
// //             require: true,
// //             rejectUnauthorized: false, // Important for self-signed certificates
// //         },
// //     },
// //     logging: false, // Optional: Disable logging
// // });

// // export default sequelize;
