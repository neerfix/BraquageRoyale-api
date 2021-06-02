import admin from "firebase-admin";
import {db} from "../Utils/firebase";
import * as userRepository from "../Repository/UsersRepository";

const firebase = require('../Utils/firebase');
const Http_response = require("../Utils/http-response");
const C = require("../Utils/Constant");

module.exports = {
    createNewUser,
    updateUserById,
    deleteUserById
};

async function createNewUser(req, res) {
    await firebase.create(req, res, 'users', admin.auth().createUser({
        email: req.body.email,
        emailVerified: false,
        phoneNumber: '',
        password: req.body.password,
        displayName: req.body.firstname + " " + req.body.lastname,
        photoURL: req.body.avatar ? req.body.avatar : C.DEFAULT_AVATAR,
        disabled: false,
    })
        .then(async function(userRecord) {
            await db.collection('users').doc(userRecord.uid)
                .set({
                    id: userRecord.uid,
                    status: C.STATUS_INACTIVE,
                    email: req.body.email,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    avatar: req.body.avatar ? req.body.avatar : C.DEFAULT_AVATAR,
                    player: {
                        username: req.body.username,
                        rank: req.body.rank ? req.body.rank : C.RANK_0,
                        exp: 0,
                    },
                    date: {
                        created_at: new Date(userRecord.metadata.creationTime),
                        updated_at: new Date(userRecord.metadata.creationTime),
                        date_of_birth: req.body.date.date_of_birth,
                        last_login: new Date(userRecord.metadata.creationTime),
                    }
                }).then(async result =>{
                    const document = userRepository.getOneUserById(userRecord.uid)
                    let response = (await document.get()).data();

                    if(!response){
                        Http_response.HTTP_404(req, res, '', 'User', '');
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

async function updateUserById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function deleteUserById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
