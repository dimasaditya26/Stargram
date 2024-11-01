'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Users', {
      fields: ['email'],
      type: 'unique',
      name: 'unique_email'
    })

    await queryInterface.addConstraint('Users', {
      fields: ['username'],
      type: 'unique',
      name: 'unique_username'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Users', 'unique_email');
    await queryInterface.removeConstraint('Users', 'unique_username');
  }
};
