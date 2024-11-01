'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Comments', {
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

    await queryInterface.addConstraint('Comments', {
      fields: ['PhotoId'],
      type: 'foreign key',
      name: 'photo_fk',
      references: { //Required field
        table: 'Photos',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Comments","photo_fk")
    await queryInterface.removeConstraint("Comments","user_fk")
  }
};
