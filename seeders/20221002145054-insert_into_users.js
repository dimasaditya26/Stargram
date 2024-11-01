'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      full_name:"Tono Sekrup",
      email:"justtono@gmail.com",
      username:"tons",
      password:"$2b$10$zHsC9pb6TZyhUG3aUPDUI.sq19jnRUkyFKAirLxA47nWtze8iRVI2",
      profile_image_url:"http://tono-pict.png",
      age:22,
      phone_number:231,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
