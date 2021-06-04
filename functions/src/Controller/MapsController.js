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

function getAllMaps (req, res) {
    mapRepository
        .getAllMaps(req, res)
        .then((maps) => res.send(maps))
        .catch(err => err);
}

function getOneMap (req, res) {
    mapRepository
        .getOneMapById(req, res)
        .then((maps) => res.send(maps))
        .catch(err => err);
}

function createNewMap (req, res) {
    mapService
        .createNewMap(req, res)
        .then((maps) => res.send(maps))
        .catch(err => err);
}

function updateMapById (req, res) {
    mapService
        .updateMapById(req, res)
        .then((maps) => res.send(maps))
        .catch(err => err);
}

function deleteMapById (req, res) {
    mapService
        .deleteMapById(req, res)
        .then((maps) => res.send(maps))
        .catch(err => err);
}
