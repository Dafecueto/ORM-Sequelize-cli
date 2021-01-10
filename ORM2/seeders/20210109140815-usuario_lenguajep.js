'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Usuario_LenguajePs', [
      {
        UsuarioId: 1,
        LenguajePId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UsuarioId: 1,
        LenguajePId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Usuario_LenguajePs', null, {});

  }
};
