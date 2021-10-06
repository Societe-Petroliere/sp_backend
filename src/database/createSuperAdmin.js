import { config } from 'dotenv';
import services from '../services/roleService';
import models from './models';

config();

const { User } = models,
    { findRoleByName } = services;

const createSuperAdmin = async () => {
    try {
        const roleName = 'SUPER_ADMIN';

        const role = await findRoleByName(roleName);
        if (!role) {
            console.log(`FATAL: create ${roleName} role first.[Hint: run 'npm run super-admin-role:create' to create super admin role]`);
            return;
        }
        const hashedPswd = process.env.ADMIN_PASSWORD;

        const superAdmin = {
            firstname: 'Samuel',
            lastname: 'Nayo',
            telephone: '0787814449',
            email: 'nshusamuel1@gmail.com',
            password: `SAM${hashedPswd}`,
            gender: 'Male',
            age: 26,
            roleId: role.id,
            id_no: 123456,
            passport_no: 1123444,
            user_image: 'https://res.cloudinary.com/samuelnayo/image/upload/v1613915506/k0bl3tldlrh6ryhql1mb.png',
            is_verified: true,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        await User.create(superAdmin);
        console.log(`${roleName} created`);
    } catch (error) {
        console.log(error);
    }
};

createSuperAdmin();
