const games = require('../src/Controller/Games/ActionsGamesController')

module.exports = {

    srv: (app) => {

        app
            // GAMES
            .get("/games/:gameId/start", (req, res) => {
                games.start(req, res)
            })
            .post("/games/:gameId/action", (req, res) => {
                games.update(req, res)
            })
    }
};
