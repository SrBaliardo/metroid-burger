'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface
      .addColumn('users', 'street', {
        type: Sequelize.STRING,
        allowNull: true,
      })
      .then(() =>
        queryInterface.addColumn('users', 'number', {
          type: Sequelize.STRING,
          allowNull: true,
        }),
      )
      .then(() =>
        queryInterface.addColumn('users', 'complement', {
          type: Sequelize.STRING,
          allowNull: true,
        }),
      )
      .then(() =>
        queryInterface.addColumn('users', 'neighborhood', {
          type: Sequelize.STRING,
          allowNull: true,
        }),
      )
      .then(() =>
        queryInterface.addColumn('users', 'city', {
          type: Sequelize.STRING,
          allowNull: true,
        }),
      )
      .then(() =>
        queryInterface.addColumn('users', 'state', {
          type: Sequelize.STRING,
          allowNull: true,
        }),
      )
      .then(() =>
        queryInterface.addColumn('users', 'path', {
          type: Sequelize.STRING,
          allowNull: true,
        }),
      );
  },
  down: async (queryInterface) => {
    return queryInterface
      .removeColumn('users', 'street')
      .then(() => queryInterface.removeColumn('users', 'number'))
      .then(() => queryInterface.removeColumn('users', 'complement'))
      .then(() => queryInterface.removeColumn('users', 'neighborhood'))
      .then(() => queryInterface.removeColumn('users', 'city'))
      .then(() => queryInterface.removeColumn('users', 'state'))
      .then(() => queryInterface.removeColumn('users', 'path'));
  },
};
