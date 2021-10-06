
const hashedPswd = process.env.ADMIN_PASSWORD;

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', [
            {
                // firstname: 'User1',
                // lastname: 'Doe',
                // telephone: '',
                // email: 'doe.user1@gmail.com',
                // password: `${hashedPswd}`,
                // gender: 'Male',
                // age: 32,
                // roleId: 4,
                // id_no: 123456,
                // passport_no: 123444,
                // user_image: '',
                // is_verified: false,
                // createdAt: new Date(),
                // updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
