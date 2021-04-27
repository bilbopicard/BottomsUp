'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cocktails', [
      {
        name: 'Manhattan',
        recipe: '2oz bourbon whiskey, 1oz sweet vermouth, 3 dashes Angostura bitters',
        description: 'Place all ingredients into a mixing glass. Stir with a bar spoon until chilled. Strain into a cocktail glass. Garnish with a cherry.',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1582056509381-33e11b85733f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Margarita',
        recipe: '2oz tequila, .75oz agave syrup, .75oz lime juice',
        description: 'Place all ingredients into a shaker. Add ice and shake until chilled. Dump contents including ice into a bucket glass. Garnish with a lime wedge.',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1590701833281-e6283af0948d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3025&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Martini',
        recipe: '2.5oz gin, .5oz dry vermouth',
        description: 'Place all ingredients into a mixing glass. Stir with a bar spoon until chilled. Strain into a cocktail glass. Garnish with a pimento stuffed olive.',
        userId: 1,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/19/07/50/cocktail-995574_1280.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sazerac',
        recipe: '2.5oz rye whiskey, .25oz simple syrup (or sugar cube), 3 dashes Peychaud\'s bitters, absinthe rinse',
        description: 'Place all ingredients into a mixing glass. If using a sugar cube muddle it with the bitters first then add the rest of the ingredients. Stir with a bar spoon until chilled. Rinse an old fashioned glass with absinthe. Strain chilled drink into the freshly rinsed glass. Garnish with a lemon twist.',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1547383698-faaaf2368d3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gimlet',
        recipe: '2oz gin, .75oz lime juice, .5oz simple syrup',
        description: 'Place all ingredients into a shaker. Add ice and shake until chilled. Strain into a cocktail glass. Garnish with a lime wedge',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1614285183131-ebfb9f917b69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3034&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Old Fashioned',
        recipe: '2oz bourbon, sugar cube or .25oz simple syrup, 3 dashes Angostura bitters',
        description: 'Place all ingredients in a mixing glass. If using a sugar cube muddle it with the bitters first then add the rest of the ingredients. Add ice and stir until chilled. Strain into an old fashioned glass with fresh ice. Garnish with an orange peel and/or a luxardo cherry.',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1595977437232-9a0426ebfe4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mojito',
        recipe: '2oz rum, 1oz simple syrup. .75oz lime juice, 5 - 8 mint leaves, soda water',
        description: 'Place rum, simple syrup, lime juice, and mint into a shaker. Add ice and shake until chilled.  Dump into a highball glass. Top with soda water and garnish with a lime wedge and/or a mint sprig.',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1601644417451-467f8bbfa767?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Negroni',
        recipe: '1oz gin, 1oz Campari, 1oz sweet vermouth',
        description: 'Place all ingredients into a mixing glass. Add ice and stir until chilled. Strain into an old fashioned glass with fresh ice. Garnish with an orange peel.',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1582457601528-5f8757143fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cocktails', null, {});
  }
};
