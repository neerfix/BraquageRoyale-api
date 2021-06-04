const mapService = require("../Service/MapsService");
const mapRepository = require("../Repository/MapsRepository");
const Http_response = require('../Utils/http-response');

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
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function getOneMap (req, res) {
    mapRepository
        .getOneMapById(req, res)
        .then((maps) => res.send(maps))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function createNewMap (req, res) {
    mapService
        .createNewMap(req, res)
        .then((maps) => res.send(maps))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function updateMapById (req, res) {
    mapService
        .updateMapById(req, res)
        .then((maps) => res.send(maps))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function deleteMapById (req, res) {
    mapService
        .deleteMapById(req, res)
        .then((maps) => res.send(maps))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}
