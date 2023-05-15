const Sequelize = require("sequelize");

module.exports = async app => {

    app.logger.debug({label:"[models][env]", message:`POSTGRES_SSL: ${process.env.POSTGRES_SSL}, POSTGRES_PORT : ${process.env.POSTGRES_PORT}, POSTGRES_HOST : ${process.env.POSTGRES_HOST}, POSTGRES_DB_NAME : ${process.env.POSTGRES_DB_NAME}, `});
    let dialectOptions = {}
    // PROD
    if(process.env.POSTGRES_SSL === "true"){
        dialectOptions = {
            ssl: {
                require: true,
                    rejectUnauthorized: false
            }
        }
    }

    app.sequelize = new Sequelize({
        database: process.env.POSTGRES_DB_NAME,
        dialect: "postgres",
        host: process.env.POSTGRES_HOST,
        logging: (process.env.POSTGRES_LOGGIN === "true"),
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT,
        username: process.env.POSTGRES_USER,
        schema: "public",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        dialectOptions: dialectOptions
    });

    let models = {
        User: require("./user_model")(app, Sequelize),
    };

    // Add models
    app.sequelize.models = models;

    try{
        await app.sequelize.authenticate();
        app.sequelize
        .sync({ force: process.env.POSTGRES_FORCE });

        app.logger.debug({label : "[models][sequelize]", message:" Connection has been established successfully!"});

        return app.sequelize;
    }catch(err){

        app.logger.error({label : "[models][sequelize]", message :"Unable to connect to the database:"+ err});
    }
     
};
