const Router = require("express").Router;

module.exports = (app, models) => {
    let router = new Router();

    router.get(
        "/",
        async (req, res)=>{

            let users = await models.User.findAll({raw: true});

            res.status(200).json({users: users.map(user=>{return {id: user.id, email: user.email, pseudo: user.pseudo}})});
        }
    );

    return router;
}