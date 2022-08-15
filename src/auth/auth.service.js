const authRepo = require("./auth.repo")

const findOne = async(email) => {
    return await authRepo.findOne(email)
}

const authService = {
    findOne
}

module.exports = authService