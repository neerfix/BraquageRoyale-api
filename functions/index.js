const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require("./routes/routes");
const games = require("./routes/games_routes");
const app = express();

let whitelist = ['https://beta.braquage-royale.xyz', 'https://www.braquage-royale.xyz', 'https://acp.braquage-royale.xyz', 'http://localhost:8080', 'http://localhost:8081', 'http://localhost:5000']
app.enable('trust proxy')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: [
        whitelist
    ],
}))

routes.crud(app);
games.srv(app);

exports.api = functions.https.onRequest(app);
