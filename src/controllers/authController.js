import model from '../database/models';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const { User } = model;

export default class authController {
    static async signup(req, res)  {
        try {
            const { firstname, lastname, telephone, email, password, gender, age, roleId, id_no, passport_no, user_image, is_verified } = req.body;

            const existingUser = await User.findOne({ where: { email } });

            if (existingUser) res.status(400).json({ message: 'User already registered!' });

            const savedUser = await User.create(req.body);
            // const savedUser = await User.create({ firstname, lastname, telephone, email, password, gender, age, roleId, id_no, passport_no, user_image, is_verified });
            // console.log(savedUser);

            res.status(201).json({ message: 'User registered successfully!', response: savedUser });
        } catch (error) {
            res.status().json({ error: error.message });
        }
    };
};