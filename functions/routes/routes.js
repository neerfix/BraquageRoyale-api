const users = require("../src/Controller/UsersController")
const maps = require("../src/Controller/MapsController")
const gamemodes = require("../src/Controller/GameModesController")
const objects = require("../src/Controller/ObjectsController")
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

            // MAPS
            .get("/maps", (req, res) => {
                maps.getAllMaps(req, res)
            })
            .get("/maps/:mapId", (req, res) => {
                maps.getOneMap(req, res)
            })
            .post("/maps/", (req, res) => {
                maps.createNewMap(req, res)
            })
            .patch("/maps/:mapId", (req, res) => {
                maps.updateMapById(req, res)
            })
            .delete("/maps/:mapId",(req, res) => {
                maps.deleteMapById(req, res)
            })

            // GAMEMODES
            .get("/gamemodes", (req, res) => {
                gamemodes.getAllGamemodes(req, res)
            })
            .get("/gamemodes/:gamemodeId", (req, res) => {
                gamemodes.getOneGamemode(req, res)
            })
            .post("/gamemodes/", (req, res) => {
                gamemodes.createNewGamemode(req, res)
            })
            .patch("/gamemodes/:gamemodeId", (req, res) => {
                gamemodes.updateGamemodeById(req, res)
            })
            .delete("/gamemodes/:gamemodeId",(req, res) => {
                gamemodes.deleteGamemodeById(req, res)
            })

            // Characters
            .get("/characters", (req, res) => {
                characters.getAllCharacters(req, res)
            })
            .get("/characters/:characterId", (req, res) => {
                characters.getOneCharacter(req, res)
            })
            .post("/characters/", (req, res) => {
                characters.createNewCharacter(req, res)
            })
            .patch("/characters/:characterId", (req, res) => {
                characters.updateCharacterById(req, res)
            })
            .delete("/characters/:characterId",(req, res) => {
                characters.deleteCharacterById(req, res)
            })

            // Objects
            .get("/objects", (req, res) => {
                objects.getAllObjects(req, res)
            })
            .get("/objects/:objectId", (req, res) => {
                objects.getOneObject(req, res)
            })
            .post("/objects/", (req, res) => {
                objects.createNewObject(req, res)
            })
            .patch("/objects/:objectId", (req, res) => {
                objects.updateObjectById(req, res)
            })
            .delete("/objects/:objectId",(req, res) => {
                objects.deleteObjectById(req, res)
            })
    }
};
