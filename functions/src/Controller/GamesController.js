const gameService = require("../Service/GamesService");
const gameRepository = require("../Repository/GamesRepository");

// routes -> /games/
module.exports = {
    getAllGames,
    getOneGame,
    createNewGame,
    updateGameById,
    deleteGameById
}

function getAllGames (req, res) {
    gameRepository
        .getAllGames(req, res)
        .then((games) => res.send(games))
        .catch(err => err);
}

function getOneGame(req, res) {
    gameRepository
        .getOneGameById(req, res)
        .then((games) => res.send(games))
        .catch(err => err);
}

function createNewGame (req, res) {
    gameService
        .createNewGame(req, res)
        .then((games) => res.send(games))
        .catch(err => err);
}

function updateGameById (req, res) {
    gameService
        .updateGameById(req, res)
        .then((games) => res.send(games))
        .catch(err => err);
}

function deleteGameById (req, res) {
    gameService
        .deleteGameById(req, res)
        .then((games) => res.send(games))
        .catch(err => err);
}
