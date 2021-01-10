'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario_LenguajeP extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuario_LenguajeP.init({
    UusarioId: DataTypes.INTEGER,
    LenguajePId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario_LenguajeP',
  });
  return Usuario_LenguajeP;
};