'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cocktails', [
      {
        name: 'Manhattan',
        recipe: '2oz bourbon whiskey, 1oz sweet vermouth, 3 dashes Angostura bitters',
        description: 'Place all ingredients into a mixing glass. Stir with a bar spoon until chilled. Strain into a cocktail glass. Garnish with a cherry',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1582056509381-33e11b85733f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Margarita',
        recipe: '2oz tequila, .75oz agave syrup, .75oz lime juice',
        description: 'Place all ingredients into a shaker. Add ice and shake until chilled. Dump contents including ice into a bucket glass. Garnish with a lime wedge',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1590701833281-e6283af0948d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3025&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Martini',
        recipe: '2.5oz gin, .5oz dry vermouth',
        description: 'Place all ingredients into a mixing glass. Stir with a bar spoon until chilled. Strain into a cocktail glass. Garnish with a pimento stuffed olive',
        userId: 1,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/19/07/50/cocktail-995574_1280.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sazerac',
        recipe: '2.5oz rye whiskey, .25oz simple syrup (or sugar cube), 3 dashes Peychaud\'s bitters, absinthe rinse',
        description: 'Place all ingredients into a mixing glass. If using a sugar cube muddle it with the bitters first then add the rest of the ingredients. Stir with a bar spoon until chilled. Rinse an old fashioned glass with absinthe. Strain chilled drink into the freshly rinsed glass. Garnish with a lemon twist',
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
        description: 'Place all ingredients in a mixing glass. If using a sugar cube muddle it with the bitters first then add the rest of the ingredients. Add ice and stir until chilled. Strain into an old fashioned glass with fresh ice. Garnish with an orange peel and/or a luxardo cherry',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1595977437232-9a0426ebfe4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mojito',
        recipe: '2oz rum, 1oz simple syrup. .75oz lime juice, 5 - 8 mint leaves, soda water',
        description: 'Place rum, simple syrup, lime juice, and mint into a shaker. Add ice and shake until chilled.  Dump into a highball glass. Top with soda water and garnish with a lime wedge and/or a mint sprig',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1601644417451-467f8bbfa767?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Negroni',
        recipe: '1oz gin, 1oz Campari, 1oz sweet vermouth',
        description: 'Place all ingredients into a mixing glass. Add ice and stir until chilled. Strain into an old fashioned glass with fresh ice. Garnish with an orange peel',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1582457601528-5f8757143fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sidecar',
        recipe: '2oz brandy, .75oz triple sec, .75oz lemon juice',
        description: 'Place all ingredients into a shaker. Shake with ice until chilled. Strain into a sugar rimmed cocktail glass',
        userId: 1,
        imageUrl: 'https://images.freeimages.com/images/large-previews/e16/drink-session-1-1501462.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tom Collins',
        recipe: '2oz gin, 1oz simple syrup, .75oz lemon juice, soda water',
        description: 'Place gin, simple syrup, and lemon juice into a shaker. Add ice and shake until chilled. Strain all ingredients into a highball glass filled with fresh ice. Top with soda water. Garnish with a lemon wedge',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1606943932434-2f21e1c54ef2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Whiskey Sour',
        recipe: '2oz bourbon, .75oz lemon juice, .75oz simple syrup',
        description: 'Place all ingredients into a shaker. Add ice and shake until chilled. Dump chilled shaker contents including ice into an old fashioned glass. Garnish with a lemon wedge',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1590955022532-c0accec47ac0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aperol Spritz',
        recipe: '3oz prosecco, 2oz Aperol, 1oz soda water',
        description: 'Fill a wine glass with ice and add the prosecco, Aperol, and then soda water. Garnish with an orange wedge',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1585975776023-29a0dbc51407?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Caipirinha',
        recipe: '2oz cachaca, half of a lime quartered, 2 sugar cubes',
        description: 'Place lime pieces and sugar cubes into a shaker and muddle. Add the cachaca and ice and shake until chilled. Pour unstrained into a highball or old fashioned glass',
        userId: 1,
        imageUrl: 'https://cdn.pixabay.com/photo/2018/06/18/21/50/caipirinha-3483439_1280.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Corpse Reviver No. 2',
        recipe: '.75oz gin, .75oz lemon juice, .75oz Cointreau, .75oz Lillet, absinthe rinse',
        description: 'Place all ingredients except absinthe into a shaker. Add ice and shake until chilled. Rinse a cocktail glass with absinthe and dump out excess. Strain into glass and garnish with a lemon wedge or peel',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1602748707857-f93fffa0214d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'White Russian',
        recipe: '2oz vodka, 1oz Kahlua, 1oz cream',
        description: 'Pour vodka and Kahlua in to an old fashioned glass filled with ice. Top with cream',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vieux Carre',
        recipe: '1oz rye whiskey, 1oz cognac, 1oz sweet vermouth, .25oz Benedictine, 2 dashes Peychaud\'s bitters, 2 dashes Angostura bitters',
        description: 'Place all ingredients into a mixing glass. Add ice and stir until chilled. Strain into a cocktail glass and garnish with a lemon peel',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1521483632781-413ac2a35ee6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pisco Sour',
        recipe: '2oz pisco, .75oz simple syrup, .5oz lemon juice, .5oz lime juice, egg white, Angostura bitters',
        description: 'Place all ingredients into a shaker and shake without ice to froth. Add ice and shake until chilled. Strain into a chilled old fashioned glass. Garnish with a few drops of bitters',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1597188446702-9b16067ad718?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGlzY28lMjBzb3VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Moscow Mule',
        recipe: '2oz vodka, .5oz lime juice, ginger beer',
        description: 'Pour vodka and lime juice into an old fashioned glass filled with ice. Top with ginger beer and garnish with a lime wedge',
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1513416543495-10c173ed9908?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2500&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cocktails', null, {});
  }
};
