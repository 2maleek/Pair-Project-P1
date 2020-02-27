'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model{}

  User.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notIn:{
          args: [[``]],
          msg: `first name cannot be empty`
        }
      }
    },
    last_name: DataTypes.STRING,
    
    role: DataTypes.STRING,

    address: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notIn:{
          args: [[``]],
          msg: `must fill in address`
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notIn:{
          args: [[``]],
          msg: `password cannot be empty`
        }
      }
    }
  },{
    hooks:{
      beforeSave: function(instance, options){
        if (!instance.last_name) {
          instance.last_name = instance.first_name
        }
        if (!instance.role) {
          instance.role = `user`
        }
      }
    },sequelize})
  
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Food, { through:models.Transaction, foreignKey:`user_id` })
  };
  return User;
};