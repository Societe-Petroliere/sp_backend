import models from './models';

const { UserRole } = models;

const superAdminRole = async () => {
    const role = {
    name: 'SUPER_ADMIN',
    description: 'This is the super admin of the site!',
    createdAt: new Date(),
    updatedAt: new Date()
    };
    await UserRole.create(role);
    console.log('Super admin role created successfully!');
};

superAdminRole();
