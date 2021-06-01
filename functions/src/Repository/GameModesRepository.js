const firebase = require('../Utils/firebase');

module.exports = {
    getAllGamemodes,
    getOneGamemodeById,
};

async function getAllGamemodes(req, res) {
    await firebase.getAll(req, res, 'gamemodes')
}

async function getOneGamemodeById(req, res) {
    await firebase.getOne(req, res, 'gamemodes', req.params.gamemodeId)
}
