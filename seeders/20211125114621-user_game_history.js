'use strict';

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const history = [...Array(10)].map((user_game_history) => (
  {
    user_id: Math.floor(Math.random() * 10) + 1,
    win: (Math.floor(Math.random() * 10) % 2) ? true : false,
    date: randomDate(new Date(2021, 1, 1), new Date()),
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
    await queryInterface.bulkInsert('user_game_histories', history, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_game_histories', history, {});
  }
};
