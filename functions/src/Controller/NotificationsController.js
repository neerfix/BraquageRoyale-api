const webpush = require('web-push');

const publicVKey = "BIuKDAREB0mrLDkTimbP9c8egWqIoUGf_CKX2BW3FHTxLLAAv3MtjQOQ5LT0TTfxPvfRVv3LmIO1-h33PoUMUMM";
const privateVKey = "-TRnfxSnBbWseY0PBe9Pz2NwH9OcF3P-CwWbdOAgCoY";

webpush.setVapidDetails('mailto:gregg.sanchez@ynov.com',publicVKey,privateVKey);

const subscribers = []

module.exports = {
    getSubscribers,
    registerSubscriber,
    sendToSubscriber
}

const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

function getSubscribers (req, res) {
    res.send(subscribers)
}

function registerSubscriber (req, res) {
    console.log(req.body.sub);
    subscribers.push(req.body.sub);
    res.send({ status : "OK" });
}

async function sendToSubscriber (req, res) {
    const pushSubscription = subscribers.find(sub => sub.endpoint === req.params.endpoint)
    console.log(pushSubscription)
    if(pushSubscription) {
        //await webpush.sendNotification(pushSubscription,JSON.stringify({ woof : getRandom(["Woof!","Woof woof!", "Bark bark bark!", "Awooooo"])}));
        res.status(200).json({ status : "OK" });
    } else {
        res.status(400).json({status : "BAD_REQUEST", message : "Id was invalid"})
    }

}