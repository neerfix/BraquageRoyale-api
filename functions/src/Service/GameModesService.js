const firebase = require('../Utils/firebase');
const admin = require('firebase-admin');
const Http_response = require("../Utils/http-response");

module.exports = {
    createNewGamemode,
    updateGamemodeById,
    deleteGamemodeById
};

async function createNewGamemode(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function updateGamemodeById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function deleteGamemodeById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
