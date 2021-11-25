'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        unique: false
      },
      email: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        unique: true
      },
      subscribed: {
        type: Sequelize.BOOLEAN,
        required: false,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_games');
  }
};