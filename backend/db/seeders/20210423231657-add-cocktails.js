'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cocktails', [
      {
        name: 'Manhattan',
        spirit: 'Whiskey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Margarita',
        spirit: 'Tequila',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Cocktails', null, {});
  }
};
