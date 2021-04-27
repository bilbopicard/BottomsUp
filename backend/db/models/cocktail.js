'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cocktail = sequelize.define('Cocktail', {
    name: DataTypes.STRING,
    recipe: DataTypes.TEXT,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {});
  Cocktail.associate = function (models) {
    // associations can be defined here
    Cocktail.belongsTo(models.User, { foreignKey: 'userId' })
    Cocktail.hasMany(models.Comment, { foreignKey: 'cocktailId' })
    Cocktail.belongsToMany(models.Ingredient, { foreignKey: 'cocktailId', otherKey: 'ingredientId', through: 'Cocktail_Ingredients' })
  };
  return Cocktail;
};