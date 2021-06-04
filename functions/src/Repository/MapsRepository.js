const firebase = require('../Utils/firebase');
const Http_response = require("../Utils/http-response");

module.exports = {
    getAllMaps,
    getOneMapById,
};

async function getAllMaps(req, res) {
    await firebase.getAll(req, res, 'maps')
}

async function getOneMapById(req, res) {
    const map = await firebase.getOne(req, res, 'maps', req.params.mapId)

    Http_response.HTTP_200(req, res, '', map)
}
