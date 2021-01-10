'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('LenguajePs', [
      {
        nombre: 'Java',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'JavaScript',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'PHP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Go',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'C++',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('LenguajePs', null, {});

  }
};
