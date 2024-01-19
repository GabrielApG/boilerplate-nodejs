const Sequelize = require("sequelize");
const db = require("../../database");

const TokenCanvas = db.define(
  "TokenCanvas",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    client_id: {
      type: Sequelize.STRING(80),
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    token: {
      type: Sequelize.STRING(5000),
      allowNull: false,
    },
    refresh_token: {
      type: Sequelize.STRING(5000),
      allowNull: false,
    },
    expires: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: "auth_access_token",
  }
);

module.exports = TokenCanvas;
