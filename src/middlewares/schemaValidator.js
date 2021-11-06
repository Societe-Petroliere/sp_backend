import { BAD_REQUEST } from 'http-status';
import responsesHelper from '../helpers/responsesHelper';

const schemaValidate = (schema, body, res, next) => {
    const {error} = schema.validate(body);

    if (error) {
        const errors = error.details.map(err => err.message);

        responsesHelper.handleError(BAD_REQUEST, error[0].replace(/"/g, ''));

        return responsesHelper.handleResponse(res);
    };

    return next();
};

export default schemaValidate;
