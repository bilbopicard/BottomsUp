'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ingredients', [
      {
        name: 'bourbon',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'rye',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'scotch',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'tequila',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'rum',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'vodka',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'champagne',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'lime juice',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'lemon juice',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'grapfruit juice',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'sweet vermouth',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'dry vermouth',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'absinthe',
        createdAt: new Date(),
        updatedAt: new Date
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ingredients', null, {});
  }
};
