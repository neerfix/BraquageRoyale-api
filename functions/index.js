const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const FCM = require('fcm-node');
const bodyParser = require('body-parser');
const routes = require("./routes/routes");
const games = require("./routes/games_routes");
const app = express();

let whitelist = ['https://beta.braquage-royale.xyz', 'https://www.braquage-royale.xyz', 'https://acp.braquage-royale.xyz', 'http://localhost:8080', 'http://localhost:5000']
app.enable('trust proxy')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: [
        whitelist
    ],
}))

const subscribers = []

const serverKey = 'AAAABzPfp7w:APA91bH7zJIIrEr29vkU1knIdAIxMt2NtxJRBzp1MA5pT6llcuhn5UODEhnOIbFroTuBCbM82tq7nT3gdeJ8Y_6cXrrh1Sz5V27wc9tRYz_XshA0tsWN1ZtsdhI0wWv8YtsxwTOFSsUP';
const fcm = new FCM(serverKey);

app.post('/subscribers', function(req, res) {
    //---check that the regid field is there---
    if (!req.body.hasOwnProperty('subscriptionId')){
        res.statusCode = 400;
        res.send('Error 400: Post syntax incorrect.');
        return;
    }
    console.log(req.body.subscriptionId);
    subscribers.push(req.body.subscriptionId)
    res.statusCode = 200;
    res.send('SubscriptionID received');
});

app.delete('/subscribers/:id', function(req, res) {
    console.log(req.params.id)
    const index = subscribers.indexOf(req.params.id)
    if (index !== -1) {
        subscribers.splice(index,1)
    }
    res.statusCode = 200;
    res.send('SubscriptionID deleted');
});

routes.crud(app);
games.srv(app);

exports.api = functions.https.onRequest(app);
