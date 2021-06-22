const firebase = require('../../Utils/firebase');
const Http_response = require("../../Utils/http-response");
const uuid = require('uuid');
const requireCheck = require('../../Utils/RequireCheck');

module.exports = {
    start,
    update
};

async function start(req, res) {
    const game = await firebase.getOne(req, res, 'games', req.params.gameId);

    let nb_players = 0;

    game.players.map((index, key) => {
        console.log(index);
        if (index.is_spectate) {
            nb_players++;
        }
    })

    const body = {
        date: {
            started_at: new Date(),
            created_at: game.date.created_at,
            updated_at: new Date(),
            finished_at: ''
        },
        round: 0,
        last_player: '',
        number_of_players: nb_players,
        current_player: {
            num: 0,
            player_name: game.players[0].user.player.username
        }
    }

    await firebase.update(req, res, 'games', body, req.params.gameId)
}

async function update(req, res) {
    const game = await firebase.getOne(req, res, 'games', req.params.gameId)

    if (!game.date.started_at) {
        return Http_response.HTTP_403(req, res, '', 'This game is not started')
    }

    if (game.date.finished_at !== null) {
        return Http_response.HTTP_403(req, res, '', 'This game is finished')
    }

    requireCheck.check(req, res, req.body.active_player_id, 'active_player_id', 'string')
    requireCheck.check(req, res, req.body.is_attack, 'is_attack', 'boolean')

    const active_user = game.players.find( player => player.user_id === req.body.active_player_id);
    const active_user_index = game.players.indexOf(active_user);

    if (game.players[game.current_player.num] !== game.players[active_user_index]) {
        return Http_response.HTTP_403(req, res, '', 'Is not your turn')
    }

    if (req.body.is_attack) {
        requireCheck.check(req, res, req.body.target_player_id, 'target_player_id', 'string')
    }

    requireCheck.check(req, res, req.body.last_coordinate, 'last_coordinate', 'object')
    requireCheck.check(req, res, req.body.last_coordinate.x, 'last_coordinate.x', 'number')
    requireCheck.check(req, res, req.body.last_coordinate.y, 'last_coordinate.y', 'number')

    const target_user = game.players.find( player => player.user_id === req.body.target_player_id);
    let target_user_index = ''

    if (req.body.is_attack) {

        if (!target_user) {
            return Http_response.HTTP_500(req, res, '', 'No target user with this id is in this game')
        }

        target_user_index = game.players.indexOf(target_user);

        target_user['vitality'] -= active_user['attack'];

        if (target_user['vitality'] <= 0) {
            active_user['kills'] += 1;
            target_user['is_spectate'] = 1;
            game.number_of_players--;

            if (game.number_of_players <= 1) {
                game.winner = active_user.user.player.username;
                game.date.finished_at = new Date();
            }
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

    if (game.current_player.num === (game.number_of_players - 1)) {
        game.current_player.num = 0;
        game.round++;
    } else {
        game.current_player.num++;
    }

    const username = game.players[game.current_player.num].user.player.username;

    game.current_player.player_name = username;

    const body = {
        date: {
            created_at: game.date.created_at,
            finished_at: game.date.finished_at ? game.date.finished_at : null,
            started_at: game.date.started_at,
            updated_at: new Date(),
        },
        winner: game.winner ? game.winner : "",
        number_of_players: game.number_of_players,
        players: game.players,
        current_player: game.current_player
    }

    const uid = uuid.v4();

    const body_log = {
        id: uid,
        round: game.round,
        coordinate: req.body.coordinate,
        last_coordinate: req.body.last_coordinate,
        date: {
            created_at: new Date(),
            updated_at: new Date(),
            finished_at: new Date(),
        },
        player: {
            username: game.players[active_user_index].user.player.username,
            avatar: game.players[active_user_index].user.avatar,
            rank: game.players[active_user_index].user.player.rank,
            exp: game.players[active_user_index].user.player.exp,
        },
        action: req.body.is_attack ? 'attack' : "move",
        target_player: {
            username: game.players[target_user_index].user.player.username,
            avatar: game.players[target_user_index].user.avatar,
            rank: game.players[target_user_index].user.player.rank,
            exp: game.players[target_user_index].user.player.exp,
        },
    }

    await firebase.db.collection('games').doc(req.params.gameId).collection('log').doc(uid).set(body_log);
    await firebase.update(req, res, 'games', body, req.params.gameId)
}
