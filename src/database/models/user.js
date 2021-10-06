import bcrypt from 'bcrypt';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // define association here
            // User.hasMany(models.Transporters, {
            //     foreignKey: 'userId',
            //     onUpdate: 'CASCADE',
            //     onDelete: 'CASCADE'
            // })
        }
    };
    User.init({
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        telephone: DataTypes.STRING,
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        roleId: {
            type: DataTypes.INTEGER,
        defaultValue: 5
        },
        age: DataTypes.INTEGER,
        gender: DataTypes.STRING,
        id_no: DataTypes.INTEGER,
        passport_no: DataTypes.INTEGER,
        user_image: DataTypes.STRING,
        is_verified: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'User'
    });

    User.beforeSave((user, options) => {
        if (user.changed('password')) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        }
    });

    User.prototype.comparePassword = function (passw, cb) {
        bcrypt.compare(passw, this.password, (err, isMatch) => {
            if (err) {
                return cb(err);
            }
            cb(null, isMatch);
            });
    };

    User.associate = function (models) {
        // associations can be defined here
        User.belongsTo(models.UserRole, {
            as: 'role',
            foreignKey: 'roleId'
        })

        // User.hasMany(models.Transporters, {
        //     foreignKey: 'userId',
        //     onDelete: 'CASCADE'
        // });
    };

    return User;
};