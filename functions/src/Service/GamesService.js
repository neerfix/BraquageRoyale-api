const firebase = require('../Utils/firebase');
const admin = require('firebase-admin');
const Http_response = require("../Utils/http-response");

module.exports = {
    createNewGame,
    updateGameById,
    deleteGameById
};

async function createNewGame(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function updateGameById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function deleteGameById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
