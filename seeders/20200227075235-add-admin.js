'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Users', [
          {
            first_name: 'admin',
            last_name: 'oddy',
            role: 'admin',
            address: 'jakarta',
            username: 'admin1',
            password: 'admin1',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            first_name: 'admin',
            last_name: 'malik',
            role: 'admin',
            address: 'jakarta',
            username: 'admin2',
            password: 'admin2',
            createdAt: new Date(),
            updatedAt: new Date()
          }
          
        ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
