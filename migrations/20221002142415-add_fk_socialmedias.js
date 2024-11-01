'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('SocialMedias', {
      fields:['UserId'],
      type:'foreign key',
      name:'user_fk',
      references:{
        table:'Users',
        field:'id'
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('SocialMedias','user_fk')
  }
};
