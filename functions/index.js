const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require("./routes/routes");
const app = express();

let whitelist = ['https://beta.braquage-royale.xyz', 'https://www.braquage-royale.xyz', 'https://acp.braquage-royale.xyz']
app.enable('trust proxy')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: [
        whitelist
    ],
}))

routes.crud(app);

exports.api = functions.https.onRequest(app);
