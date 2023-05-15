require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
let server;

let envConfigUrl = `${__dirname}/.env${app.get('env') === "development" ? "" : "."+app.get('env')}`;
require('dotenv').config({path: envConfigUrl});

let start =  async ()=>{

    app.logger = require("./logger");
    app.logger.debug({label:"[init]", message:` Starting server... build nodev ${process.version} port : ${process.env.PORT}, build version : ${process.env.BUILD_VERSION} env : ${app.get('env')}, envConfigUrl : ${envConfigUrl}`});

    await require("./models/models")(app);

    server = app.listen(process.env.PORT);

    app.use(cors({
        origin: process.env.FRONT_URL,
        optionsSuccessStatus: 200
    }));

    app.use(express.json());
    app.use(cookieParser());
    app.use('/static', express.static('static'));

    app.use(function(req, res, next){
        app.logger.debug({label:"request", message:`originalUrl : ${req.originalUrl}  method : ${req.method}`});
        next();
    });

    require("./middlewares/middlewares")(app);
    require("./services/services")(app);
    require("./controllers/controllers")(app);

    return app;
};

module.exports = start();
