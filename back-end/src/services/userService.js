const userModel = require('../models/userModel');
const { validateCredentials } = require('../validations/userValidations');

const createUser = async (user) => {
  const checkUserData = validateCredentials(user.email, user.password);

  if (checkUserData.message) return false;

  const { id } = await userModel.createUser(user);

  return { id };
};

module.exports = { createUser };
