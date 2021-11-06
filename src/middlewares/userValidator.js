import Joi from 'joi';
import schemaValidator from '../middlewares/schemaValidator';

const userValidator = (req, res, next) => {
    const dataSchema = Joi.object().keys({
        firstName: Joi.string().min(3).max(50).required().message({
            'any.required': 'First Name is required.',
            'string.empty': 'First Name is not allowed to be empty.'
        }),
        lastName: Joi.string().min(3).max(50).required().message({
            'any.required': 'First Name is required.',
            'string.empty': 'First Name is not allowed to be empty.'
        }),
        email: Joi.string().email().required().message({
            'any.required': 'Email is required.',
            'string.empty': 'Email is not allowed to be empty.',
            'string.email': 'Email must be a valid email.'
        }),
        password: Joi.string().min(3).max(50).required().message({
            'any.required': 'Password is required.',
            'string.empty': 'Password is not allowed to be empty.'
        }),
        roleId: Joi.string().min(3).max(50).required().message({
            'any.required': 'RoleId is required.',
            'string.empty': 'RoleId is not allowed to be empty.'
        }),
        age: Joi.string().min(3).max(50).required().message({
            'any.required': 'Age is required.',
            'string.empty': 'Age is not allowed to be empty.'
        }),
        gender: Joi.string().min(3).max(50).required().message({
            'any.required': 'Gender is required.',
            'string.empty': 'Gender is not allowed to be empty.'
        }),
        id_no: Joi.string().min(3).max(50).required().message({
            'any.required': 'Id_no is required.',
            'string.empty': 'Id_no is not allowed to be empty.'
        }),
        passport_no: Joi.string().min(3).max(50).required().message({
            'any.required': 'Passport_no is required.',
            'string.empty': 'Passport_no is not allowed to be empty.'
        }),
    })
    .options({ abortEarly: false });

    return schemaValidator(dataSchema, req.body, res, next);
};
