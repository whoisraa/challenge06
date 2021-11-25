'use strict';

const faker = require('faker');
let seedUser = [];

for(let i = 0; i < 10; i++) {
  const user = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    subscribed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  seedUser.push(user);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('user_games', seedUser, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_games', seedUser, {});
  }
};
