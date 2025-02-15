"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("alunos", "email", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("alunos", "email", {
      type: Sequelize.STRING,
      allowNull: true, // Restaurando para permitir valores nulos caso precise reverter
      unique: false, // Removendo a unicidade caso precise reverter
    });
  },
};
