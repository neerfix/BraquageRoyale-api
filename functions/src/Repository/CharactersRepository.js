const firebase = require('../Utils/firebase');

module.exports = {
    getAllCharacters,
    getOneCharacterById,
};

async function getAllCharacters(req, res) {
    await firebase.getAll(req, res, 'characters')
}

async function getOneCharacterById(req, res) {
    await firebase.getOne(req, res, 'characters', req.params.characterId)
}
