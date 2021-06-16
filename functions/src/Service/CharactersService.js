const firebase = require('../Utils/firebase');
const Http_response = require("../Utils/http-response");
const requireCheck = require("../Utils/RequireCheck");

module.exports = {
    createNewCharacter,
    updateCharacterById,
    deleteCharacterById
};

async function createNewCharacter(req, res) {
    const uid = uuid.v4();
    requireCheck.check(req, res, req.body.name, 'name', 'string')
    requireCheck.check(req, res, req.body.url_image, 'name', 'string')

    const body = {
        id: uid,
        date: {
            created_at: new Date(),
            updated_at: new Date(),
        },
        name: req.body.name,
        url_image: req.body.url_image
    }
    await firebase.create(req, res, 'games', body, uid)
}

async function updateCharacterById(req, res) {
    requireCheck.check(req, res, req.body.name, 'name', 'string')
    requireCheck.check(req, res, req.body.url_image, 'name', 'string')

    const body = {
        date: {
            updated_at: new Date(),
        },
        name: req.body.name,
        url_image: req.body.url_image
    }
    await firebase.update(req, res, 'games', body, req.params.characterId)
}

async function deleteCharacterById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
