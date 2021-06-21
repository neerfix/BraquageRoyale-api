const admin = require('firebase-admin');
const Http_response  = require("./http-response");

admin.initializeApp();

const db = admin.firestore()

const getAllByUserId = async (req, res, type, userId) => {
    const document = db.collection(type);
    let response = [];
    await document.get().then(querySnapshot => {
        let docs = querySnapshot.docs;

        for (let doc of docs) {
            const game = doc.data().players.find( player => player.user_id === userId);
            if (game) {
                response.push(doc.data());
            }
        }
    });

    Http_response.HTTP_200(req, res, '', response)
}

const getAll = async (req, res, type) => {
    const document = db.collection(type);
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
    const document = db.collection(type).doc(data);
    let response = (await document.get()).data();

    if (!response) {
        Http_response.HTTP_404(req, res, '', type)
    }

    return response;
}

const create = async (req, res, type, body, uuid) => {
    switch (type === 'users') {
        case true:
            await db.collection(type).doc(uuid).set(body)
                .then(async result => {
                    const user = await getOne(req, res, 'users', uuid);

                    Http_response.HTTP_201(req, res, '', user);
                })
                .catch(error => {
                    Http_response.HTTP_400(req, res, '', error.message);
                })
            break;
        case false:
            await db.collection(type).doc(uuid).set(body)
                .then(async result => {
                    const data = await getOne(req, res, type, uuid);

                    Http_response.HTTP_201(req, res, '', data);
                })
                .catch(error => {
                    Http_response.HTTP_500(req, res, '', error);
                })
            break;
    }
}

const update = async (req, res, type, body, uuid) => {
    await db.collection(type).doc(uuid).update(body)
        .then(async result => {
            const data = await getOne(req, res, type, uuid);

            Http_response.HTTP_200(req, res, '', data);
        })
        .catch(error => {
            Http_response.HTTP_500(req, res, '', error);
        })
}

module.exports = {
    db,
    getAll,
    getOne,
    create,
    update,
    getAllByUserId
};
