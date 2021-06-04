const firebase = require('../Utils/firebase');
const Http_response = require("../Utils/http-response");

module.exports = {
    getAllCharacters,
    getOneCharacterById,
};

async function getAllCharacters(req, res) {
    await firebase.getAll(req, res, 'characters')
}

async function getOneCharacterById(req, res) {
    const character = await firebase.getOne(req, res, 'characters', req.params.characterId)

    Http_response.HTTP_200(req, res, '', character)
}
