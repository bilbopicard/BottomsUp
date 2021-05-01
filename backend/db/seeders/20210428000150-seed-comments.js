'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Comments', [
      {
        content: 'Delicious. A favorite of mine forever.',
        cocktailId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Scrumdiddlyumptious.',
        cocktailId: 3,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'THIS IS THE BEST COCKTAIL',
        cocktailId: 6,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'It\'s a bit sweet for me',
        cocktailId: 2,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'I\'ve had better',
        cocktailId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'This was AMAZING.',
        cocktailId: 4,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Wow!',
        cocktailId: 5,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'This was a good time :)',
        cocktailId: 6,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'a new favorite of mine. i\'ll recommend to everyone',
        cocktailId: 6,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Marvelous',
        cocktailId: 6,
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Yup. Now I need another',
        cocktailId: 7,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Thanks for the yummy recipe',
        cocktailId: 8,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Comments', null, {});
  }
};
