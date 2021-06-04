const objectService = require("../Service/ObjectsService");
const objectRepository = require("../Repository/ObjectsRepository");
const Http_response = require('../Utils/http-response');

// routes -> /objects/
module.exports = {
    getAllObjects,
    getOneObject,
    createNewObject,
    updateObjectById,
    deleteObjectById
}

function getAllObjects (req, res) {
    objectRepository
        .getAllObjects(req, res)
        .then((maps) => res.send(maps))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function getOneObject (req, res) {
    objectRepository
        .getOneObjectById(req, res)
        .then((objects) => res.send(objects))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function createNewObject (req, res) {
    objectService
        .createNewObject(req, res)
        .then((objects) => res.send(objects))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function updateObjectById (req, res) {
    objectService
        .updateObjectById(req, res)
        .then((objects) => res.send(objects))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function deleteObjectById (req, res) {
    objectService
        .deleteObjectById(req, res)
        .then((objects) => res.send(objects))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}
