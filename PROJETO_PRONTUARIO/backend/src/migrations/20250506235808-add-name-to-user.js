'use strict';

const { Sequelize } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adicionando a coluna 'nome' à tabela 'Users'
    await queryInterface.addColumn('Users', 'nome', {
      type: Sequelize.STRING,
      allowNull: false, 
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'nome');
  }
};
