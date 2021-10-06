import models from './models';

const { UserRole } = models;

const adminRole = async () => {
    const role = {
    name: 'ADMIN',
    description: 'This is the admin of the site!',
    createdAt: new Date(),
    updatedAt: new Date()
    };
    await UserRole.create(role);
    console.log('Admin role created successfully!');
};

adminRole();
