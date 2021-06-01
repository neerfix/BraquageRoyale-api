const firebase = require('../Utils/firebase');
const admin = require('firebase-admin');
const Http_response = require("../Utils/http-response");

module.exports = {
    createNewCharacter,
    updateCharacterById,
    deleteCharacterById
};

async function createNewCharacter(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function updateCharacterById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function deleteCharacterById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
