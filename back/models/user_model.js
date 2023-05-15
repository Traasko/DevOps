module.exports = (app, Sequelize) => {
    const User = {
        pseudo: {
            type: Sequelize.STRING(100),
            allowNull: true,
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: true,
            unique: true,
        },
        password: {
            type: Sequelize.STRING(200),
            allowNull: true,
        },
        activated: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        }
    };
    
    const UserModel = app.sequelize.define("User", User, {});

    return UserModel;
};
