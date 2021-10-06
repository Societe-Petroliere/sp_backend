const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {

  static associate(models) {
      UserRole.hasMany(models.User, {
          foreignKey: 'roleId',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
      })
  }
  };
  UserRole.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING
  }, {
      sequelize,
      modelName: 'UserRole',
  });

  return UserRole;
};