const userService = require("./user.service");


const createUser = async (req, res) => {
  
  const { fullName, email, password } = req.body;
  try {
    const recordUser = await userService.createUser({
      fullName,
      email,
      password,
    });
    return res.json(recordUser);
  } catch (error) {
    return res.status(500).json({ message: "Create user failed!" });
  }
};


//edit user
const editUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { fullName, email, password } = req.body;
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
