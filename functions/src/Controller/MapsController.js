const mapService = require("../Service/MapsService");
const mapRepository = require("../Repository/MapsRepository");

// routes -> /maps/
module.exports = {
    getAllMaps,
    getOneMap,
    createNewMap,
    updateMapById,
    deleteMapById
}

function getAllMaps (req, res, next) {
    mapRepository
        .getAllMaps(req, res)
        .then((maps) => res.send(maps))
        .catch((err) => next(err));
}

function getOneMap (req, res, next) {
    mapRepository
        .getOneMapById(req, res)
        .then((maps) => res.send(maps))
        .catch((err) => next(err));
}

function createNewMap (req, res, next) {
    mapService
        .createNewMap(req, res)
        .then((maps) => res.send(maps))
        .catch((err) => next(err));
}

function updateMapById (req, res, next) {
    mapService
        .updateMapById(req, res)
        .then((maps) => res.send(maps))
        .catch((err) => next(err));
}

function deleteMapById (req, res, next) {
    mapService
        .deleteMapById(req, res)
        .then((maps) => res.send(maps))
        .catch((err) => next(err));
}
