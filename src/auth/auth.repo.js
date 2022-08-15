const {User} = require('../database/models')

const findOne = async(email) => {
    return await User.findOne({
        where: {email},
        raw: true
    })
}

const authRepo = {
    findOne
}

module.exports = authRepo;