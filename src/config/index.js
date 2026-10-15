import "dotenv/config";

const {
  PORT = 3000,
  NODE_ENV = "development",
  DATABASE_URI_PROD,
  DATABASE_URI_DEV,
} = process.env;

const IS_DEV = NODE_ENV === "development";

const DB_CONFIG = {
  URI: IS_DEV ? DATABASE_URI_DEV : DATABASE_URI_PROD,
  OPTIONS: IS_DEV
    ? {
        logging: false,
        dialect: "postgres",
        native: false,
      }
    : {
        logging: false,
        dialect: "postgres",
        native: false,
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      },
};

export { PORT, NODE_ENV, DB_CONFIG };
