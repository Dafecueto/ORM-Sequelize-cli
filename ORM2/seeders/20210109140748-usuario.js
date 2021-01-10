'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'John',
        apellidoP: 'Q',
        apellidoM: 'Doe',
        email: 'johndoe@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Usuarios', null, {});

  }
};
