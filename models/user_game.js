'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_game.hasOne(models.user_game_biodata, {foreignKey: 'user_id'});
      user_game.hasMany(models.user_game_history, {foreignKey: 'user_id'});
    }
  };
  user_game.init({
    username: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 255]
      }
    },
    password: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      unique: false,
      validate: {
        len: [6, 255]
      }
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      unique: true
    },
    subscribed: {
      type: DataTypes.BOOLEAN,
      required: false,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'user_game',
  });
  return user_game;
};