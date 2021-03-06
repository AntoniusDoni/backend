'use strict';
const {
  Model
} = require('sequelize');  
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.roles, {
        through: "user_roles",
        foreignKey: "userId",
        otherKey: "roleId"
      });
      User.belongsToMany(models.menus, {
        through: "user_menus",
        foreignKey: "idUser",
        otherKey: "menuId"
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date()
    
  }, {
    sequelize,
    modelName: 'users',
  });
    return User;
  };