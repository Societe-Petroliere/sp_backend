module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstname: {
                type: Sequelize.STRING
            },
            lastname: {
                type: Sequelize.STRING
            },
            telephone: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            roleId: {
                type: Sequelize.INTEGER
            },
            age: {
                type: Sequelize.INTEGER
            },
            gender: {
                type: Sequelize.STRING
            },
            id_no: {
                type: Sequelize.INTEGER
            },
            passport_no: {
                type: Sequelize.INTEGER
            },
            user_image: {
                type: Sequelize.STRING
            },
            is_verified: {
                type: Sequelize.BOOLEAN
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
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};