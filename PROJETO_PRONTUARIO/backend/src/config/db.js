// Cria e exporta uma conexão com um banco de dados PostgreSQL usando o Sequelize.

const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
  try {
      await mongoose.connect(process.env.MONGODB_URI)
      console.log("MongoDB conectado com sucesso!")
  } catch (error) {
      console.error("Erro ao se conectar ao MongoDB:", error.message)
      process.exit(1)
  }
}

module.exports = connectDB