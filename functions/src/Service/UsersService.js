const admin = require("firebase-admin");
const userRepository = require("../Repository/UsersRepository");
const firebase = require('../Utils/firebase');
const Http_response = require("../Utils/http-response");
const C = require("../Utils/Constant");

module.exports = {
    createNewUser,
    updateUserById,
    deleteUserById
};

async function createNewUser(req, res) {
    const body = {
        id: req.body.id,
        status: C.STATUS_ACTIVE,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        avatar: req.body.avatar ? req.body.avatar : C.DEFAULT_AVATAR,
        player: {
            username: req.body.player.username,
            rank: req.body.player.rank ? req.body.player.rank : C.RANK_0,
            exp: 0,
        },
        date: {
            created_at: new Date(),
            updated_at: new Date(),
            date_of_birth: req.body.date.date_of_birth,
            last_login: new Date(),
        }
    };
    await firebase.db.collection('users').doc(req.body.id)
        .set({
            body
        }).then(async result =>{
            const document = firebase.db.collection('users').doc(req.body.id);
            let response = (await document.get()).data();

            if(!response){
                Http_response.HTTP_404(req, res, '', 'User')
            }

            return res.status(201).send(response);
        }).catch(e => {
            return {code: e.code, message: e.message};
        });
}

async function updateUserById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function deleteUserById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
