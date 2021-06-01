const firebase = require('../Utils/firebase');

module.exports = {
    getAllGames,
    getOneGameById,
};

async function getAllGames(req, res) {
    await firebase.getAll(req, res, 'games')
}

async function getOneGameById(req, res) {
    await firebase.getOne(req, res, 'games', req.params.gameId)
}
