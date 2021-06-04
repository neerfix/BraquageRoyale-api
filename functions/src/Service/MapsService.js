import {db} from "../Utils/firebase";
import * as mapRepository from "../Repository/MapsRepository";

const firebase = require('../Utils/firebase');
const admin = require('firebase-admin');
const Http_response = require("../Utils/http-response");

module.exports = {
    createNewMap,
    updateMapById,
    deleteMapById
};

async function createNewMap(req, res) {
    await firebase.create(req, res, 'maps', admin.auth().createMaps({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
    })
        .then(async function(mapRecord) {
            await db.collection('maps').doc(mapRecord.uid)
                .set({
                    id: mapRecord.uid,
                    status: req.body.status,
                    name: req.body.name,
                    description: req.body.description,
                    vote: 0,
                    date: {
                        created_at: new Date(mapRecord.metadata.creationTime),
                        updated_at: new Date(mapRecord.metadata.creationTime),
                    },
                    version: {
                        version_number: 1.0 ,
                        files_url: '',
                    }
                }).then(async result =>{
                    const document = mapRepository.getOneMapById(mapRecord.uid)
                    let response = (await document.get()).data();

                    if(!response){
                        Http_response.HTTP_404(req, res, '', 'Map', '');
                    }

                    Http_response.HTTP_201(req, res, '', response);
                }).catch(e => {
                    Http_response.HTTP_500(req, res, '', e);
                });
        })
        .catch(function(error) {
            Http_response.HTTP_409(req, res, '', '', error.message);
        }))
}

async function updateMapById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function deleteMapById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
