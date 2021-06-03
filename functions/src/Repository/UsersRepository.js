const firebase = require('../Utils/firebase');

module.exports = {
    getAllUsers,
    getOneUserById,
};

async function getAllUsers(req, res) {
    await firebase.getAll(req, res, 'users')
}

function getOneUserById(req, res, userId) {
    firebase.getOne(req, res, 'users', userId)
        .then(r => r)
        .catch(e => e)
}
