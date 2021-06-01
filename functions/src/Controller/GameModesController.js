const gamemodeService = require("../Service/GameModesService");
const gamemodeRepository = require("../Repository/GameModesRepository");

// routes -> /gamemodes/
module.exports = {
    getAllGamemodes,
    getOneGamemode,
    createNewGamemode,
    updateGamemodeById,
    deleteGamemodeById
}

function getAllGamemodes (req, res, next) {
    gamemodeRepository
        .getAllGamemodes(req, res)
        .then((gamemodes) => res.send(gamemodes))
        .catch((err) => next(err));
}

function getOneGamemode (req, res, next) {
    gamemodeRepository
        .getOneGamemodeById(req, res)
        .then((gamemodes) => res.send(gamemodes))
        .catch((err) => next(err));
}

function createNewGamemode (req, res, next) {
    gamemodeService
        .createNewGamemode(req, res)
        .then((gamemodes) => res.send(gamemodes))
        .catch((err) => next(err));
}

function updateGamemodeById (req, res, next) {
    gamemodeService
        .updateGamemodeById(req, res)
        .then((gamemodes) => res.send(gamemodes))
        .catch((err) => next(err));
}

function deleteGamemodeById (req, res, next) {
    gamemodeService
        .deleteGamemodeById(req, res)
        .then((gamemodes) => res.send(gamemodes))
        .catch((err) => next(err));
}
