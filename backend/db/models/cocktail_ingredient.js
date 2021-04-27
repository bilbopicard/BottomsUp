'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cocktail_Ingredient = sequelize.define('Cocktail_Ingredient', {
    cocktailId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER
  }, {});
  Cocktail_Ingredient.associate = function(models) {
    // associations can be defined here
  };
  return Cocktail_Ingredient;
};