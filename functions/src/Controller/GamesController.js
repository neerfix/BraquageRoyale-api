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

function getAllGames (req, res, next) {
    gameRepository
        .getAllGames(req, res)
        .then((games) => res.send(games))
        .catch((err) => next(err));
}

function getOneGame(req, res, next) {
    gameRepository
        .getOneGameById(req, res)
        .then((games) => res.send(games))
        .catch((err) => next(err));
}

function createNewGame (req, res, next) {
    gameService
        .createNewGame(req, res)
        .then((games) => res.send(games))
        .catch((err) => next(err));
}

function updateGameById (req, res, next) {
    gameService
        .updateGameById(req, res)
        .then((games) => res.send(games))
        .catch((err) => next(err));
}

function deleteGameById (req, res, next) {
    gameService
        .deleteGameById(req, res)
        .then((games) => res.send(games))
        .catch((err) => next(err));
}
