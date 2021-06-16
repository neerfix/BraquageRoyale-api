const firebase = require('../Utils/firebase');
const Http_response = require("../Utils/http-response");
const C = require("../Utils/Constant");
const uuid = require('uuid');
const requireCheck = require('../Utils/RequireCheck');

module.exports = {
    truc
};

async function truc(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
