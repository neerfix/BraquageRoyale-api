const users = require("../src/Controller/UsersController")
const Http_response = require("../src/Utils/http-response")

module.exports = {

    crud: (app) => {

        app
            .get("/", (req, res) => {
                Http_response.HTTP_200(req, res, '', 'status: on')
            })

            // USERS
            .get("/users", (req, res) => {
                users.getAllUsers(req, res)
            })
            .get("/users/:userId", (req, res) => {
                users.getOneUser(req, res)
            })
            .post("/users/", (req, res) => {
                users.createNewUser(req, res)
            })
            .patch("/users/:userId", (req, res) => {
                users.updateUserById(req, res)
            })
            .delete("/users/:userId",(req, res) => {
                users.deleteUserById(req, res)
            })
    }
};
