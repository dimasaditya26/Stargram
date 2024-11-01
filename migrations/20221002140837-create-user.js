'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      email: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      profile_image_url: {
        type: Sequelize.TEXT, 
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      phone_number: {
        type: Sequelize.BIGINT, 
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};