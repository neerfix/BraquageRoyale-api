const firebase = require('../../utils/firebase');

module.exports = {
    getAllUsers,
    getOneUserById,
};

async function getAllUsers(req, res) {
    firebase.getAll(req, res, 'users')
}

async function getOneUserById(req, res) {
    await firebase.getOne(req, res, 'users', req.params.userId)
}
