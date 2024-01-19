require("dotenv").config();
const log = require("../log");

module.exports = {
  host: process.env.SECRET_DB_HOST,
  username: process.env.SECRET_DB_USERNAME,
  password: process.env.SECRET_DB_PASSWORD,
  database: process.env.SECRET_DB_SCHEMA,
  port: process.env.SECRET_DB_PORT,
  dialect: process.env.DB_DIALECT || "mysql",
  logging: (msg) => log.info(msg),
  define: {
    paranoid: true,
  },
};