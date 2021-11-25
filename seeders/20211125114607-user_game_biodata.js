'use strict';

const faker = require('faker');
const biodata = [...Array(10)].map((user_game_biodata) => (
  {
    user_id: Math.floor(Math.random() * 10) + 1,
    name: faker.name.firstName(),
    bio: faker.lorem.paragraph(),
    url: faker.internet.url(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
));

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
    await queryInterface.bulkInsert('user_game_biodata', biodata, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_game_biodata', biodata, {});
  }
};
