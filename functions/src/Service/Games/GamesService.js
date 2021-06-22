const firebase = require('../../Utils/firebase');
const Http_response = require("../../Utils/http-response");
const C = require("../../Utils/Constant");
const uuid = require('uuid');
const requireCheck = require('../../Utils/RequireCheck');

module.exports = {
    createNewGame,
    updateGameById,
    deleteGameById,
    createNewInvite
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
        map_id: req.body.map_id,
        players: players,
        status: C.STATUS_ACTIVE
    }
    await firebase.create(req, res, 'games', body, uid)
}
async function createNewInvite(req, res) {
    const uid = uuid.v4();
    const body = {
        id: uid,
        accepted: "false",
        active: "true",
        created_at: new Date(),
        gameId: req.body.gameId,
        userId: req.body.userId,
        username: req.body.username,
    }
    await firebase.create(req, res, 'invitations', body, uid)
}

async function updateGameById(req, res) {
    requireCheck.check(req, res, req.body.name, 'name', 'string')
    requireCheck.check(req, res, req.body.max_player, 'max_player', 'number')
    requireCheck.check(req, res, req.body.is_private, 'is_private', 'boolean')
    requireCheck.check(req, res, req.body.map_id, 'map_id', 'string')
    requireCheck.check(req, res, req.body.players, 'players', 'object')
    req.body.players.map(index => {
        requireCheck.check(req, res, index.is_spectate, 'players.is_spectate','boolean')
        requireCheck.check(req, res, index.character_id, 'players.character_id', 'string')
    })

    const body = {
        date: {
            updated_at: new Date(),
        },
        name: req.body.name,
        max_player: req.body.max_player,
        is_private: req.body.is_private,
        map_id: req.body.map_id,
        players: req.body.players,
        status: C.STATUS_ACTIVE
    }
    await firebase.update(req, res, 'games', body, req.params.gameId)
}

async function deleteGameById(req, res) {
    Http_response.HTTP_200(req, res, '', 'hello')
}
