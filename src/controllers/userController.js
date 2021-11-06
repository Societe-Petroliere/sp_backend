import models from '../database/models';

const { User } = models;

export default class userController {
    // GET ALL USERS
    static async getAllUsers(req, res) {
        try {
            const existingUsers = await User.findAll({});

            if (existingUsers.length == 0) return res.status(404).json({ message: 'No user found!' });
            res.status(200).json({ message: 'Users found successfully!', data: existingUsers });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error!', dev_error: error.message});
        }
    };

    // GET ONE USER
    static async getOneUser(req, res) {
        try {
            const { id } = req.params;

            const existingUser = await User.findOne({ where: { id } })

            res.status(200).json({ message: 'User found successfully!', data: existingUser });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error!', dev_error: error.message});
        }
    };
};