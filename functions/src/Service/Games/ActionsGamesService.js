const firebase = require('../../Utils/firebase');
const Http_response = require("../../Utils/http-response");
const uuid = require('uuid');
const requireCheck = require('../../Utils/RequireCheck');

module.exports = {
    start,
    update
};

async function start(req, res) {
    const body = {
        date: {
            started_at: new Date()
        }
    }

    await firebase.update(req, res, 'games', body, req.params.gameId)
}

async function update(req, res) {
    requireCheck.check(req, res, req.body.active_player_id, 'active_player_id', 'string')
    requireCheck.check(req, res, req.body.is_attack, 'is_attack', 'boolean')

    if (req.body.is_attack) {
        requireCheck.check(req, res, req.body.target_player_id, 'target_player_id', 'string')
    }

    requireCheck.check(req, res, req.body.last_coordinate, 'last_coordinate', 'object')
    requireCheck.check(req, res, req.body.last_coordinate.x, 'last_coordinate.x', 'number')
    requireCheck.check(req, res, req.body.last_coordinate.y, 'last_coordinate.y', 'number')

    const game = await firebase.getOne(req, res, 'games', req.params.gameId)
    const active_user = game.players.find( player => player.user_id === req.body.active_player_id);
    const target_user = game.players.find( player => player.user_id === req.body.target_player_id);
    const active_user_index = game.players.indexOf(active_user);

    if (req.body.is_attack) {

        if (!target_user) {
            Http_response.HTTP_500(req, res, '', 'No target user with this id is in this game')
        }

        const target_user_index = game.players.indexOf(target_user);

        target_user['vitality'] -= active_user['attack'];

        if (target_user['vitality'] <= 0) {
            active_user['kills'] += 1;
            target_user['is_spectate'] = 1;
        }

        game.players[active_user_index] = active_user;
        game.players[target_user_index] = target_user;
    }

    if (!req.body.coordinate.y) {
        requireCheck.check(req, res, req.body.coordinate.x, 'coordinate.x', 'number')
    }

    if (!req.body.coordinate.x) {
        requireCheck.check(req, res, req.body.coordinate.y, 'coordinate.y', 'number')
    }

    game.players[active_user_index].coordinate = req.body.coordinate
    game.players[active_user_index].last_coordinate = req.body.last_coordinate

    const body = {
        date: {
            updated_at: new Date(),
        },
        players: game.players
    }

    const uid = uuid.v4();

    const body_log = {
        id: uid,
        coordinate: req.body.coordinate,
        last_coordinate: req.body.last_coordinate,
        date: {
            created_at: new Date(),
            updated_at: new Date(),
            finished_at: new Date(),
        },
        player: active_user.user_id,
        action: req.body.is_attack ? 'attack' : "move",
        attack_player: target_user.user_id
    }

    await firebase.db.collection('games').doc(req.params.gameId).collection('log').doc(uid).set(body_log);
    await firebase.update(req, res, 'games', body, req.params.gameId)
}
