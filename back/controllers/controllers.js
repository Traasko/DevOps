module.exports = app => {
    app.use('/users', require('./user_controller')(app, app.sequelize.models));
};