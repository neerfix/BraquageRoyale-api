const firebase = require('../Utils/firebase');
const admin = require('firebase-admin');
const Http_response = require("../Utils/http-response");

module.exports = {
    createNewObject,
    updateObjectById,
    deleteObjectById
};

async function createNewObject(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function updateObjectById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function deleteObjectById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
