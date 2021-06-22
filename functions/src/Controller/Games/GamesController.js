const gameService = require("../../Service/Games/GamesService");
const gameRepository = require("../../Repository/GamesRepository");
const Http_response = require('../../Utils/http-response');

// routes -> /games/
module.exports = {
    getAllGames,
    getOneGame,
    createNewGame,
    createNewInvite,
    updateGameById,
    deleteGameById,
    getOneInvite,
    getAllGameByUserId

}

function getAllGames (req, res) {
    gameRepository
        .getAllGames(req, res)
        .then((games) => res.send(games))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function getOneInvite (req, res) {
    gameRepository
        .getOneInvite(req, res)
        .then((games) => res.send(games))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function getOneGame(req, res) {
    gameRepository
        .getOneByGameId(req, res)
        .then((games) => res.send(games))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function createNewGame (req, res) {
    gameService
        .createNewGame(req, res)
        .then((games) => res.send(games))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function createNewInvite (req, res) {
    gameService
        .createNewInvite(req, res)
        .then((games) => res.send(games))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function updateGameById (req, res) {
    gameService
        .updateGameById(req, res)
        .then((games) => res.send(games))
        .catch(err => {
            console.error(err)
        });
}

function deleteGameById (req, res) {
    gameService
        .deleteGameById(req, res)
        .then((games) => res.send(games))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}

function getAllGameByUserId (req, res) {
    gameRepository
        .getOneByUserId(req, res)
        .then((games) => res.send(games))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}
