const firebase = require('../Utils/firebase');
const admin = require('firebase-admin');
const Http_response = require("../Utils/http-response");

module.exports = {
    createNewUser,
    updateUserById,
    deleteUserById
};

async function createNewUser(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function updateUserById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function deleteUserById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
