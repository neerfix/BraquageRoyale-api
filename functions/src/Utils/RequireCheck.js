const Http_response = require('./http-response');

module.exports = {
    check: (req, res, arg, field, type) => {
        if (arg === undefined) {
            Http_response.HTTP_400(req, res, field +' field is required');
        }

        if (typeof arg !== type) {
            Http_response.HTTP_400(req, res, field +' field is not an instance of '+ type);
        }
    }
}
