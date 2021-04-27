'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.STRING
  }, {});
  Ingredient.associate = function (models) {
    // associations can be defined here
    Ingredient.belongsToMany(models.Cocktail, { foreignKey: 'ingredientId', otherKey: 'cocktailId', through: 'Cocktail_Ingredients' })

  };
  return Ingredient;
};