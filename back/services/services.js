module.exports = app => {

    app.services = {
        user_service: require('./user_service')(app),
    };

};