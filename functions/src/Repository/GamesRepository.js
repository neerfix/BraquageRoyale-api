const firebase = require('../Utils/firebase');
const Http_response = require("../Utils/http-response");

module.exports = {
    getAllGames,
    getOneGameById,
    getOneInvite,
    getOneByGameById,
    getOneByUserId
};

async function getAllGames(req, res) {
    await firebase.getAll(req, res, 'games')
}

async function getOneByGameById(req, res) {
    const game = await firebase.getOne(req, res, 'games', req.params.gameId)

    Http_response.HTTP_200(req, res, '', game)
}
async function getOneInvite(req, res) {
    const game = await firebase.getOne(req, res, 'invitations', req.params.inviteId)

    Http_response.HTTP_200(req, res, '', game)
}
async function getOneByUserId(req, res) {
    await firebase.getAllByUserId(req, res, 'games', req.params.userId)
}
