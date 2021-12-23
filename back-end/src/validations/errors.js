const errors = {
  missingEmail: {
    message: 'O "e-mail" deve ser informado',
    code: 400,
  },
  emptyEmail: {
    message: 'O "e-mail" não pode estar vazio',
    code: 400,
  },
  invalidEmail: {
    message: 'O "e-mail" deve ter o formato email@dominio',
    code: 400,
  },
  missingPassword: {
    message: 'A "senha" deve ser informada',
    code: 400,
  },
  emptyPassword: {
    message: 'A "senha" não pode estar vazia',
    code: 400,
  },
  weakPassword: {
    message: 'A senha deve conter entre 8 a 16 caracteres e no mínimo uma letra maiúscula, uma mínuscula, um número e um símbolo',
    code: 400,
  },
};

module.exports = { errors };
