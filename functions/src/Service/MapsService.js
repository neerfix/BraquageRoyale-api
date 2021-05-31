const db = require('../../utils/firebase');
const admin = require('firebase-admin');
const Http_response = require("../../Utils/http-response");

module.exports = {
    getAllMaps,
    getOneMapById,
    createNewMap,
    updateMapById,
    deleteMapById
};

async function getAllMaps(req, res) {
    const data = db.collection('maps');
    let response = [];

    await data.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        for (let doc of docs) {
            response.push(doc.data());
        }
    });

    return res.status(200).send(response);
}

async function getOneMapById(req, res) {
    const document = db.collection('maps').doc(req.params.mapId);
    let response = (await document.get()).data();

    if(!response){
        Http_response.HTTP_404(req, res, '', 'Map')
    }

    return res.status(200).send(response);
}
