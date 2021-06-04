const userService = require("../Service/UsersService");
const userRepository = require("../Repository/UsersRepository");
const Http_response = require('../Utils/http-response');

// routes -> /users/
module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUserById,
    deleteUserById
}

function getAllUsers (req, res) {
    userRepository
        .getAllUsers(req, res)
        .then((users) => res.send(users))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function getOneUser (req, res) {
    userRepository
        .getOneUserById(req, res, req.params.userId)
        .then((user) => res.send(user))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function createNewUser (req, res) {
    userService
        .createNewUser(req, res)
        .then((users) => res.send(users))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function updateUserById (req, res) {
    userService
        .updateUserById(req, res)
        .then((users) => res.send(users))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function deleteUserById (req, res) {
    userService
        .deleteUserById(req, res)
        .then((users) => res.send(users))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}
