'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Food extends Model{}

  Food.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notIn:{
          args: [[``]],
          msg: `name cannot be empty`
        }
      }
    },
    stock: DataTypes.INTEGER,
    price: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notIn:{
          args: [[``]],
          msg: `price cannot be empty`
        }
      }
    },
    group: DataTypes.STRING
  },{hooks: {
    beforeSave: function(instance, options){
      if(!instance.stock){
        instance.stock = 10
      }
    }
  },sequelize})
  
  Food.associate = function(models) {
    // associations can be defined here
    Food.belongsToMany(models.User, { through:models.Transaction, foreignKey:`food_id` })
  };
  return Food;
};