const { errors } = require('./errors');

const isEmailExists = (email) => email !== undefined;
const isEmailNotEmpty = (email) => email !== '';
const isValidEmail = (email) => {
  const regEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return regEmail.test(email);
};
const isPasswordExists = (password) => password !== undefined;
const isPasswordNotEmpty = (password) => password !== '';
const isValidPassword = (password) => {
  // ref: https://qastack.com.br/programming/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
  const regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?([^\w\s]|[_])).{8,16}$/;
  return regPassword.test(password);
};

const validateCredentials = (email, password) => {
  switch (false) {
    case isEmailExists(email):
      return errors.missingEmail;
    case isEmailNotEmpty(email):
      return errors.emptyEmail;
    case isValidEmail(email):
      return errors.invalidEmail;
    case isPasswordExists(password):
      return errors.missingPassword;
    case isPasswordNotEmpty(password):
      return errors.emptyPassword;
    case isValidPassword(password):
      return errors.weakPassword;
    default: return {};
  }
};

module.exports = { validateCredentials };
