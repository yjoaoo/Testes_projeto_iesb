const bcrypt = require("bcrypt")
const User = require("../models/User")
const validatePasssword = require("../utils/passwordValidator")
const jwt = require("jsonwebtoken")

const login = async(req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ where: { email }})
        if (!user) return res.status(404).json({ message: "Usuario nao encontrado"})

        const senhaValida = await bcrypt.compare(password, user.password)
        if (!senhaValida) return res.status(401).json({ message: "Senha invalida"})

        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role},
            process.env.JWT_SECRET,
            { expiresIn: "2h"}
        )
        res.status(200).json({ token, user: {id: user.id, email: user.email}})
    } catch(error){
        res.status(500).json({ message: "Erro interno no login", error: error.message})
    }
}

const register = async (req, res) => {
    const { email, password} = req.body

    const { valid, error } = validatePasssword(password)
    if (!valid) return res.status(400).json({ message: "Senha fraca", checklist: error})
    
    try {
        const existingUser = await User.findOne({ where: { email }})
        if (existingUser) return res.status(400).json({ message: "E-mail ja esta em uso"})
        
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({ email, password: hashedPassword})    
        return res.status(201).json({ message: "Usuário registrado com sucesso"})
    }catch (erro) {
        return res.status(500).json({ message: "Erro interno", erro: erro.message})
    }
}

module.exports = {
    register,
    login
}