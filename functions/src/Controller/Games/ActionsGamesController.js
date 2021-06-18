const actionGameService = require("../Service/ActionsGamesService");
const gameRepository = require("../Repository/GamesRepository");
const Http_response = require('../Utils/http-response');

// routes -> /games/
module.exports = {
    getAllGames,
}

function getAllGames (req, res) {
    actionGameService
        .truc(req, res)
        .then((games) => res.send(games))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}
