module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('UserRoles', [
      {
        name: 'CONTENT_CREATOR',
        description: 'This is a content creator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MANAGER',
        description: 'This is a manager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OPERATOR',
        description: 'This is an operator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'TRANSPORTER',
        description: 'This is an transporter',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SUPPLIER',
        description: 'This is a supplier',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CUSTOMER',
        description: 'This is an customer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DRIVER',
        description: 'This is an driver',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('UserRoles', null, {});
    }
};
