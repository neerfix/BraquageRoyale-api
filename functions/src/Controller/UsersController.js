const userService = require("../Service/UsersService");
const userRepository = require("../Repository/UsersRepository");

// routes -> /users/
module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUserById,
    deleteUserById
}

function getAllUsers (req, res, next) {
    userRepository
        .getAllUsers(req, res)
        .then((users) => res.send(users))
        .catch((err) => next(err));
}

function getOneUser (req, res, next) {
    userRepository
        .getOneUserById(req, res)
        .then((users) => res.send(users))
        .catch((err) => next(err));
}

function createNewUser (req, res, next) {
    userService
        .createNewUser(req, res)
        .then((users) => res.send(users))
        .catch((err) => next(err));
}

function updateUserById (req, res, next) {
    userService
        .updateUserById(req, res)
        .then((users) => res.send(users))
        .catch((err) => next(err));
}

function deleteUserById (req, res, next) {
    userService
        .deleteUserById(req, res)
        .then((users) => res.send(users))
        .catch((err) => next(err));
}
