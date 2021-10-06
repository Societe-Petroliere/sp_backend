import models from './models';

const { userRole } = models;

const adminRole = async () => {
    const role = {
    name: 'ADMIN',
    description: 'This is the admin of the site!',
    createdAt: new Date(),
    updatedAt: new Date()
    };
    await userRole.create(role);
    console.log('Admin role created successfully!');
};

adminRole();
