import models from '../database/models';

const { UserRole } = models;

export default {
    findRoleByName: async (userRoleName) => {
        const role = await UserRole.findOne({ where: { name: userRoleName } });
        if (role) return role;
    },
    findRoleById: async (roleId) => {
        const role = await UserRole.findOne({ where: { id: roleId } });
        if (role) return role;
    }
};
