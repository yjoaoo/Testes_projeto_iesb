const express = require("express")
const routes = require("./router")
const sequelize = require("./config/db")
// const passport = require("passport");
require("./config/passConfig");
require("dotenv").config()

const app = express()

// app.use(passport.initialize());

sequelize.authenticate().then(() => {
    console.log(" Conectado ao PostgreSQL  com sucesso!")
    return sequelize.sync()
}).then(() => {
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`)
    })
}).catch((erro) => {
    console.error(`Erro ao conectar ao banco: ${erro}`)
})


app.use(express.json())
app.use(routes)


module.exports = app 