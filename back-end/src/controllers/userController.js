const userService = require('../services/userService');
const { validateCredentials } = require('../validations/userValidations');

const createUser = async (req, res) => {
  const userData = req.body;

  const validate = validateCredentials(userData.email, userData.password);
  if (validate.message) {
    return res.status(validate.code).json({ message: validate.message });
  }

  const { id } = await userService.createUser(userData);

  return res.status(201).json({ id });
};

module.exports = { createUser };
