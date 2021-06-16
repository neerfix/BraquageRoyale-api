const {db} = require("../Utils/firebase");
const mapRepository = require("../Repository/MapsRepository");
const firebase = require('../Utils/firebase');
const C = require("../Utils/Constant");
const uuid = require('uuid');
const admin = require('firebase-admin');
const requireCheck = require('../Utils/RequireCheck');
const Http_response = require("../Utils/http-response");

module.exports = {
    createNewMap,
    updateMapById,
    deleteMapById
};

async function createNewMap(req, res) {
    requireCheck.check(req, res, req.body.name, 'name', 'string')
    requireCheck.check(req, res, req.body.files_url, 'files_url', 'string')
    const uid = uuid.v4();
    const body = {
        id: uid,
        date: {
            created_at: new Date(),
            updated_at: new Date(),
        },
        name: req.body.name,
        description: req.body.description ? req.body.description : "",
        status: C.STATUS_ACTIVE,
        vote: 0,
        version: {
            version_number: "1.0.0" ,
            files_url: req.body.files_url,
        }
    }
    await firebase.create(req, res, 'maps', body, uid)
}

async function updateMapById(req, res) {
    requireCheck.check(req, res, req.body.name, 'name', 'string')
    requireCheck.check(req, res, req.body.files_url, 'files_url', 'string')

    const body = {
        date: {
            created_at: new Date(),
            updated_at: new Date(),
        },
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        vote: req.body.vote,
        version: {
            version_number: req.body.version_number ,
            files_url: req.body.files_url,
        }
    }
    await firebase.update(req, res, 'maps', body, req.params.mapId)
}

async function deleteMapById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
