const objectService = require("../Service/ObjectsService");
const objectRepository = require("../Repository/ObjectsRepository");

// routes -> /objects/
module.exports = {
    getAllObjects,
    getOneObject,
    createNewObject,
    updateObjectById,
    deleteObjectById
}

function getAllObjects (req, res, next) {
    objectRepository
        .getAllObjects(req, res)
        .then((maps) => res.send(maps))
        .catch((err) => next(err));
}

function getOneObject (req, res, next) {
    objectRepository
        .getOneObjectById(req, res)
        .then((objects) => res.send(objects))
        .catch((err) => next(err));
}

function createNewObject (req, res, next) {
    objectService
        .createNewObject(req, res)
        .then((objects) => res.send(objects))
        .catch((err) => next(err));
}

function updateObjectById (req, res, next) {
    objectService
        .updateObjectById(req, res)
        .then((objects) => res.send(objects))
        .catch((err) => next(err));
}

function deleteObjectById (req, res, next) {
    objectService
        .deleteObjectById(req, res)
        .then((objects) => res.send(objects))
        .catch((err) => next(err));
}
