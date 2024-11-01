'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Photos', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_fk',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Photos","user_fk")
  }
};
