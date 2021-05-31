const express = require("express");
const router = express.Router();
const userService = require("../Service/UsersService");
const userRepository = require("../Repository/UsersRepository");

// routes -> /users/

router.get("/", getAllUsers);
const getAllUsers = (req, res, next) => {
    userRepository
        .getAllUsers(req, res)
        .then((users) => res.send(users))
        .catch((err) => next(err));
}

router.get("/:userId", getOneUser);
function getOneUser(req, res, next) {
    userRepository
        .getOneUserById(req, res)
        .then((users) => res.send(users))
        .catch((err) => next(err));
}

router.post("/", createNewUser);
const createNewUser = (req, res, next) => {
    userService
        .createNewUser(req, res)
        .then((users) => res.send(users))
        .catch((err) => next(err));
}
