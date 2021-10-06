/* eslint-disable no-console */
import { config } from 'dotenv';
import services from '../services/role';
import models from './models';

config();

const { User } = models,
    { findRoleByName } = services;

const createAdmin = async () => {
    try {
        const roleName = 'ADMIN';

        const role = await findRoleByName(roleName);
        if (!role) {
            console.log(`FATAL: create ${roleName} role first.[Hint: run 'npm run manager-role:create' to create manager role]`);
            return;
        }
        const hashedPswd = process.env.ADMIN_PASSWORD;

        const admin1 = {
            firstname: 'Angelus',
            lastname: 'Nziza',
            telephone: '',
            email: 'angelus.nziza@gmail.com',
            password: 'Test123!.',
            gender: 'Male',
            age: 30,
            roleId: 2,
            id_no: 123456,
            passport_no: 123444,
            user_image: 'https://res.cloudinary.com/samuelnayo/image/upload/v1613915506/k0bl3tldlrh6ryhql1mb.png',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        admin2 = {
            firstname: 'Emmanuel',
            lastname: 'Bizimana',
            telephone: '',
            email: 'emmanuel.bizimana@gmail.com',
            password: 'Test123!.',
            gender: 'Male',
            age: 28,
            roleId: 2,
            roleId: 2,
            id_no: 123456,
            passport_no: 123444,
            user_image: '',
            createdAt: new Date(),
            updatedAt: new Date()
        };

        await User.create(admin1);
        await User.create(admin2);
        console.log(`2 ${roleName}S created successfully!`);
    } catch (error) {
        console.log(error);
    }
};

createAdmin();
