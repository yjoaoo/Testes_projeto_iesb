// Ele verifica se o token JWT enviado é válido antes de permitir o acesso a rotas protegidas.

const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) return res.status(401).json({ message: "Token ausente"})

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error){
        res.status(403).json({ message: "Token invalido "})
    }
}