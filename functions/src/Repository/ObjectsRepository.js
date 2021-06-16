const firebase = require('../Utils/firebase');
const Http_response = require("../Utils/http-response");

module.exports = {
    getAllObjects,
    getOneObjectById,
};

async function getAllObjects(req, res) {
    await firebase.getAll(req, res, 'objects')
}

async function getOneObjectById(req, res) {
    const objet = await firebase.getOne(req, res, 'objects', req.params.objectId)

    Http_response.HTTP_200(req, res, '', objet)
}
