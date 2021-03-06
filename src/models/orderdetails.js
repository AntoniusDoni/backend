'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderDetails.belongsTo(models.items,{
        foreignKey:'itemsId',
      
      });
      OrderDetails.belongsTo(models.racikans,{
        foreignKey:'idRacik',
      
      });
      OrderDetails.hasMany(models.Order,{
        foreignKey:'no_order'
      });
    }
  }
  OrderDetails.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true 
    },
    orderId: DataTypes.UUID,
    itemsId: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
    itemPrice: DataTypes.DOUBLE,
    no_bacth:DataTypes.UUID,
    no_fa:DataTypes.UUID,
    is_racik:DataTypes.TINYINT,
    idRacik:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'OrderDetails',
  });
  return OrderDetails;
};