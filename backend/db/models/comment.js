'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT,
    cocktailId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.Cocktail, { foreignKey: 'cocktailId' })
    Comment.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Comment;
};