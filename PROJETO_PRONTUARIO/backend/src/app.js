const express = require("express");
const routes = require("./router");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express()

connectDB()


app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`)
})


module.exports = app 