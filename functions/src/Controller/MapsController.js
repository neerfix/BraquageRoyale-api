const express = require("express");
const router = express.Router();
const userService = require("../../Services/Users/users.services");

// routes -> /maps/

router.get("/", getAllMaps);
function getAllMaps(req, res, next) {
    userService
        .getAllMaps(req, res)
        .then((users) => res.send(users))
        .catch((err) => next(err));
}
