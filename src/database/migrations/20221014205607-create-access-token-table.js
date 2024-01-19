"use strict";
const TokenCanvas = require("../../app/models/tokenCanvas.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "auth_access_token",
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
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("auth_access_token");
  },
};
