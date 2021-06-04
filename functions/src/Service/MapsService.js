const {db} = require("../Utils/firebase");
const mapRepository = require("../Repository/MapsRepository");
const firebase = require('../Utils/firebase');
const uuid = require('uuid');
const admin = require('firebase-admin');
const Http_response = require("../Utils/http-response");

module.exports = {
    createNewMap,
    updateMapById,
    deleteMapById
};

async function createNewMap(req, res) {
    const uid = uuid.v4();
    const body = {
        id: uid,
        date: {
            created_at: new Date(),
            updated_at: new Date(),
        },
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        vote: "",
        version: {
            version_number: "" ,
            files_url: '',
        }
    }
    await firebase.create(req, res, 'maps', body, uid)
}

async function updateMapById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function deleteMapById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
