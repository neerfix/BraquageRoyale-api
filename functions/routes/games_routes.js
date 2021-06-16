const maps = require("../src/Controller/MapsController")
const Http_response = require("../src/Utils/http-response")

module.exports = {

    srv: (app) => {

        app
            .get("/", (req, res) => {
                Http_response.HTTP_200(req, res, '', 'status: on')
            })

            // TODO ?????????
            .get("/maps", (req, res) => {
                maps.getAllMaps(req, res)
            })
    }
};
