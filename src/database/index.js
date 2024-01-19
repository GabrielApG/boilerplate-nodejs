const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const smowlClient = require("../app/models/smowlClient.model");

const db = new Sequelize(dbConfig);

smowlClient.init(db);

module.exports = db;
