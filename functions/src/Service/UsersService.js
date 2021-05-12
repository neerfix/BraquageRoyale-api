const db = require('../../utils/firebase');
const admin = require('firebase-admin');
const Http_response = require("../../Utils/http-response");

module.exports = {
    getAllUsers,
    getOneUserById,
    createNewUser,
    updateUserById,
    deleteUserById
};

async function getAllUsers(req, res) {
    const data = db.collection('users');
    let response = [];

    await data.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        for (let doc of docs) {
            response.push(doc.data());
        }
    });

    return res.status(200).send(response);
}

async function getOneUserById(req, res) {
    const document = db.collection('users').doc(req.params.userId);
    let response = (await document.get()).data();

    if(!response){
        Http_response.HTTP_404(req, res, '', 'User')
    }

    return res.status(200).send(response);
}
