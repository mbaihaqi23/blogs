const { User } = require("../database/models");

const createUser = async ({ fullName, email, password }) => {
  return await User.create({
    fullName,
    email,
    password,
  });
};

const editUser = async ({id, fullName, email, password}) =>{
  return await User.update(
      {id, fullName, email, password},
      {where: {id}, returning: true}
  )
}

const userRepo = {
  createUser,
  editUser
};

module.exports = userRepo;
