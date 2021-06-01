const firebase = require('../Utils/firebase');

module.exports = {
    getAllObjects,
    getOneObjectById,
};

async function getAllObjects(req, res) {
    await firebase.getAll(req, res, 'objects')
}

async function getOneObjectById(req, res) {
    await firebase.getOne(req, res, 'objects', req.params.objectId)
}
