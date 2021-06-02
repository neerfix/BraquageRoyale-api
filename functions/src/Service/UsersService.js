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
    let body;
    await admin.auth().createUser({
        email: req.body.email,
        emailVerified: false,
        password: req.body.password,
        displayName: req.body.firstname + " " + req.body.lastname,
        photoURL: req.body.avatar ? req.body.avatar : C.DEFAULT_AVATAR,
        disabled: false,
    }).then(async function(userRecord) {
        body = {
            id: userRecord.uid,
            status: C.STATUS_INACTIVE,
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
                created_at: new Date(userRecord.metadata.creationTime),
                updated_at: new Date(userRecord.metadata.creationTime),
                date_of_birth: req.body.date.date_of_birth,
                last_login: new Date(userRecord.metadata.creationTime),
            }
        };
        await firebase.create(req, res, 'users', body);
        const user = userRepository.getOneUserById(req, res, userRecord.uid);

        Http_response.HTTP_201(req, res, '', user);
    }.catch(function(error) {
        Http_response.HTTP_409(req, res, '', '', error.message);
    }));
}

async function updateUserById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function deleteUserById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
