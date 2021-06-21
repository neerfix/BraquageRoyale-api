const actionGameService = require("../../Service/Games/ActionsGamesService");
const gameRepository = require("../../Repository/GamesRepository");
const Http_response = require('../../Utils/http-response');

// routes -> /games/
module.exports = {
    start,
}

function start (req, res) {
    actionGameService
        .start(req, res)
        .then((games) => res.send(games))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}
