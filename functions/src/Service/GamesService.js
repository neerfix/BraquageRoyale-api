const firebase = require('../Utils/firebase');
const Http_response = require("../Utils/http-response");
const C = require("../Utils/Constant");
const uuid = require('uuid');

module.exports = {
    createNewGame,
    updateGameById,
    deleteGameById
};

async function createNewGame(req, res) {
    const uid = uuid.v4();
    const players = [];
    req.body.players.map(index => {
        index['attack'] = 10;
        index['vitality'] = 100;
        index['kills'] = 0;
        players.push(index)
    })
    const body = {
        id: uid,
        date: {
            created_at: new Date(),
            updated_at: new Date(),
            finished_at: new Date(),
        },
        name: req.body.name,
        max_player: req.body.max_player,
        is_private: req.body.is_private,
        invite_code: uuid.v4(),
        map_id: req.body.map_id,
        players: players,
        status: C.STATUS_ACTIVE
    }
    await firebase.create(req, res, 'games', body, uid)
}

async function updateGameById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}

async function deleteGameById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
