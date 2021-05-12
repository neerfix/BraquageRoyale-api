module.exports = {

    crud: (app) => {

        app
            .get("/", (req, res) => {
                res.status(200).send({ "status": true });
            })
    }
};
