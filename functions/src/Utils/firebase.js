import * as Http_response from "./http-response";

const admin = require('firebase-admin');
let serviceAccount;

serviceAccount = require('../../config/serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
});

const getAll = async (req, res, type) => {
    const document = admin.collection(type);
    let response = [];

    await document.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        for (let doc of docs) {
            response.push(doc.data());
        }
    });

    Http_response.HTTP_200(req, res, '', response)
}

const getOne = async (req, res, type, data) => {
    const document = admin.collection(type).doc(data);
    let response = (await document.get()).data();

    if(!response){
        Http_response.HTTP_404(req, res, '', 'User')
    }

    Http_response.HTTP_200(req, res, '', response)
}

const create = async (req, res, type, data, body) => {
    await admin.collection(type).doc(data)
        .set({
            body
        })
        .then(result => {
            Http_response.HTTP_201(req, res, '', result);
        })
        .catch(error => {
            Http_response.HTTP_400(req, res, '', error.message);
        })
}

module.exports = {
    db: admin.firestore(),
    getAll,
    getOne,
    create
};
