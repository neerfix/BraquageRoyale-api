const characterService = require("../Service/CharactersService");
const characterRepository = require("../Repository/CharactersRepository");
const Http_response = require('../Utils/http-response');

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
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function getOneCharacter (req, res, next) {
    characterRepository
        .getOneCharacterById(req, res)
        .then((characters) => res.send(characters))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function createNewCharacter (req, res) {
    characterService
        .createNewCharacter(req, res)
        .then((characters) => res.send(characters))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function updateCharacterById (req, res) {
    characterService
        .updateCharacterById(req, res)
        .then((characters) => res.send(characters))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function deleteCharacterById (req, res) {
    characterService
        .deleteCharacterById(req, res)
        .then((characters) => res.send(characters))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}
