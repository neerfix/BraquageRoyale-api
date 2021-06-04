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

function getAllUsers (req, res) {
    userRepository
        .getAllUsers(req, res)
        .then((users) => res.send(users))
        .catch(err => console.error(err));
}

function getOneUser (req, res) {
    userRepository
        .getOneUserById(req, res)
        .then((users) => res.send(users))
        .catch(err => console.error(err));
}

function createNewUser (req, res) {
    userService
        .createNewUser(req, res)
        .then((users) => res.send(users))
        .catch(err => console.error(err));
}

function updateUserById (req, res) {
    userService
        .updateUserById(req, res)
        .then((users) => res.send(users))
        .catch(err => console.error(err));
}

function deleteUserById (req, res) {
    userService
        .deleteUserById(req, res)
        .then((users) => res.send(users))
        .catch(err => console.error(err));
}
