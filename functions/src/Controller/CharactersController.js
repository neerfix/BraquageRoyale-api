const characterService = require("../Service/CharactersService");
const characterRepository = require("../Repository/CharactersRepository");

// routes -> /characters/
module.exports = {
    getAllCharacters,
    getOneCharacter,
    createNewCharacter,
    updateCharacterById,
    deleteCharacterById
}

function getAllCharacters (req, res) {
    characterRepository
        .getAllCharacters(req, res)
        .then((characters) => res.send(characters))
        .catch(err => console.error(err));
}

function getOneCharacter (req, res, next) {
    characterRepository
        .getOneCharacterById(req, res)
        .then((characters) => res.send(characters))
        .catch(err => console.error(err));
}

function createNewCharacter (req, res) {
    characterService
        .createNewCharacter(req, res)
        .then((characters) => res.send(characters))
        .catch(err => console.error(err));
}

function updateCharacterById (req, res) {
    characterService
        .updateCharacterById(req, res)
        .then((characters) => res.send(characters))
        .catch(err => console.error(err));
}

function deleteCharacterById (req, res) {
    characterService
        .deleteCharacterById(req, res)
        .then((characters) => res.send(characters))
        .catch(err => console.error(err));
}
