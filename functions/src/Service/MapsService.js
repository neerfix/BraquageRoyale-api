const firebase = require('../Utils/firebase');
const admin = require('firebase-admin');
const Http_response = require("../Utils/http-response");

module.exports = {
    createNewMap,
    updateMapById,
    deleteMapById
};

async function createNewMap(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function updateMapById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function deleteMapById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
