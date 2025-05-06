const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const User = sequelize.define("User", {
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // name: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     validate: {notEmpty: true, len: [2, 60]}
    // }
})

module.exports = User 