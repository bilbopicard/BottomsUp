'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cocktail = sequelize.define('Cocktail', {
    name: DataTypes.STRING,
    spirit: DataTypes.STRING
  }, {});
  Cocktail.associate = function(models) {
    // associations can be defined here
  };
  return Cocktail;
};