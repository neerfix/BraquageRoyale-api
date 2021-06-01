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

function getAllCharacters (req, res, next) {
    characterRepository
        .getAllCharacters(req, res)
        .then((characters) => res.send(characters))
        .catch((err) => next(err));
}

function getOneCharacter (req, res, next) {
    characterRepository
        .getOneCharacterById(req, res)
        .then((characters) => res.send(characters))
        .catch((err) => next(err));
}

function createNewCharacter (req, res, next) {
    characterService
        .createNewCharacter(req, res)
        .then((characters) => res.send(characters))
        .catch((err) => next(err));
}

function updateCharacterById (req, res, next) {
    characterService
        .updateCharacterById(req, res)
        .then((characters) => res.send(characters))
        .catch((err) => next(err));
}

function deleteCharacterById (req, res, next) {
    characterService
        .deleteCharacterById(req, res)
        .then((characters) => res.send(characters))
        .catch((err) => next(err));
}
