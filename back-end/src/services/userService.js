const userModel = require('../models/userModel');
const { validateCredentials } = require('../validations/userValidations');

const createUser = async (user) => {
  const checkUserData = validateCredentials(user.email, user.password);
  if (checkUserData.message) return checkUserData;

  const newUser = await userModel.createUser(user);
  return { newUser, code: '201' };
};

module.exports = { createUser };
