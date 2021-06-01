const firebase = require('../Utils/firebase');

module.exports = {
    getAllMaps,
    getOneMapById,
};

async function getAllMaps(req, res) {
    await firebase.getAll(req, res, 'maps')
}

async function getOneMapById(req, res) {
    await firebase.getOne(req, res, 'maps', req.params.mapId)
}
