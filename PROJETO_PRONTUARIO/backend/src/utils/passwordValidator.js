module.exports = function validatePasssword(password){
    const error = []

    if (password.length < 8) error.push("Mínimo de 8 caracteres")
    if (!/[A-Z]/.test(password)) error.push("Pelo menos uma letra maiuscula")
    if (!/[a-z]/.test(password)) error.push("Pelo menos uma letra minuscula")
    if (!/[0-9]/.test(password)) error.push("pelo menos um numero")
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) error.push("Pelo menos um caractere especial")

    return {
        valid: error.length === 0,
        error
    }
}