const userService = require("./user.service");

// create user
const createUser = async (req, res) => {
  const {fullName, email, password} = req.body
  try {
      const createdUser = await userService.createUser({fullName, email, password})
      return res.status(200).json(createdUser)
  } catch (error) {
      return res.status(500).json({ message: "Create user failed!" });
  }   
  
}

//edit user
const editUser = async (req, res) => {
  const { userId } = req.params;
  const { fullName, email, password } = req.body;
  try {
      const editedUser = await userService.editUser({ id: userId, fullName, email, password })
      return res.status(200).json(editedUser)
  } catch (error) {
      return res.status(500).json({ message: "Create user failed!" });
      }
     
  }
const userController = {
  createUser,
  editUser
};

module.exports = userController;
