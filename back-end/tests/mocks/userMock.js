const payloadUser = {
  email: 'rfabrprogrammer@gmail.com',
  password: 'vT3057#vQS45$',
};

const { email, ...userWithoutEmail } = payloadUser;
const { password, ...userWithoutPassword } = payloadUser;

const payloadUser2 = {
  email: 'rfabrprogrammer@',
  password: 'vT3057#vQS45$',
}

const payloadUser3 = {
  email: 'rfabrprogrammer@gmail.com',
  password: '123v5Ta',
}

const payloadUser4 = {
  email: '',
  password: '123v5Ta',
}

const payloadUser5 = {
  email: 'rfabrprogrammer@gmail.com',
  password: '',
}

module.exports = {
  payloadUser,
  userWithoutEmail,
  userWithoutPassword,
  payloadUser2,
  payloadUser3,
  payloadUser4,
  payloadUser5,
};
