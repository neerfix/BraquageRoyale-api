const actionGameService = require("../../Service/Games/ActionsGamesService");
const Http_response = require('../../Utils/http-response');

// routes -> /games/
module.exports = {
    start,
    update
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

function update (req, res) {
    actionGameService
        .update(req, res)
        .then((games) => res.send(games))
        .catch(err => {
            console.error(err)
            Http_response.HTTP_500(req, res, '', err)
        });
}
