'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'email', {
      allowNull: false,
      type: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {}
};
