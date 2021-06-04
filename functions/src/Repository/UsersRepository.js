const firebase = require('../Utils/firebase');
const Http_response = require("../Utils/http-response");

module.exports = {
    getAllUsers,
    getOneUserById,
};

async function getAllUsers(req, res) {
    await firebase.getAll(req, res, 'users')
}

async function getOneUserById(req, res, userId) {
    const user = await firebase.getOne(req, res, 'users', userId)

    Http_response.HTTP_200(req, res, '', user)
}
