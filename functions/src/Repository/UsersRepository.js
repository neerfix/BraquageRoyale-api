const firebase = require('../Utils/firebase');
const Http_response = require("../Utils/http-response");

module.exports = {
    getAllUsers,
    getOneUserById,
    getOneUserByUsername
};

async function getAllUsers(req, res) {
    await firebase.getAll(req, res, 'users')
}

async function getOneUserById(req, res, userId) {
    const user = await firebase.getOne(req, res, 'users', userId)

    Http_response.HTTP_200(req, res, '', user)
}

async function getOneUserByUsername(req, res, username) {
    const user = await firebase.getOne(req, res, 'users', username)
    Http_response.HTTP_200(req, res, '', user)
}
