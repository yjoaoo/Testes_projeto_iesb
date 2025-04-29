const sequelize = require("./config/db")
const User = require("./models/User")
require("dotenv").config()

sequelize.sync({ force: false}).then(() => {
    console.log("Tabelas sincronizadas com o banco de dados ")
})


