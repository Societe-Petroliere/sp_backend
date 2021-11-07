import models from '../database/models';

const { User } = models;

export default class userService {
    static async findUserById(userId) {
        const existingUser = await User.findOne({ where: { id: userId } });
        if (existingUser) return existingUser;
    }
};   