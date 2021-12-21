const sinon = require('sinon');
const { expect } = require('chai');
const {
  payloadUser,
  userWithoutEmail,
  userWithoutPassword,
  payloadUser2,
  payloadUser3,
  payloadUser4,
  payloadUser5,
} = require('../mocks/userMock');
const UserModel = require('../../src/models/userModel');
const UserService = require('../../src/services/userService');

describe('Cria um novo usuário no BD', () => {
  before(() => {
    const ID_EXAMPLE = '604cb554311d68f491ba5781';

    sinon.stub(UserModel, 'createUser')
      .resolves({ id: ID_EXAMPLE });
  });

  after(() => {
    UserModel.createUser.restore();
  });

  describe('Quando o usuário é criado com sucesso', () => {
    it('Retorna um objeto', async () => {
      const response = await UserService.createUser(payloadUser);
  
      expect(response).to.be.an('object');
    });

    it('O objeto contém a propriedade newUser', async () => {
      const response = await UserService.createUser(payloadUser);

      expect(response).to.have.property('newUser');
    });

    it('newUser contém a propriedade id', async () => {
      const response = await UserService.createUser(payloadUser);
    
      expect(response.newUser).to.have.property('id');
    });

    it('O objeto contém a propriedade code', async () => {
      const response = await UserService.createUser(payloadUser);
  
      expect(response).to.have.property('code');
    });
  
    it('A propriedade code contém 201', async () => {
      const response = await UserService.createUser(payloadUser);
  
      expect(response.code).to.be.equals('201');
    });
  });

  describe('Quando o e-mail não é informado', () => {
    it('Retorna um objeto', async () => {
      const response = await UserService.createUser(userWithoutEmail);

      expect(response).to.be.an('object');
    });

    it('O objeto contém a propriedade message', async () => {
      const response = await UserService.createUser(userWithoutEmail);

      expect(response).to.have.property('message');
    });

    it('A propriedade message contém uma mensagem personalizada', async () => {
      const response = await UserService.createUser(userWithoutEmail);

      expect(response.message).to.contains('O "e-mail" deve ser informado');
    });

    it('O objeto contém a propriedade code', async () => {
      const response = await UserService.createUser(userWithoutEmail);
  
      expect(response).to.have.property('code');
    });

    it('A propriedade code contém 400', async () => {
      const response = await UserService.createUser(userWithoutEmail);

      expect(response.code).to.be.equals('400');
    });
  });

  describe('Quando o e-mail está vazio', () => {
    it('Retorna um objeto', async () => {
      const response = await UserService.createUser(payloadUser4);

      expect(response).to.be.an('object');
    });

    it('O objeto contém a propriedade message', async () => {
      const response = await UserService.createUser(payloadUser4);

      expect(response).to.have.property('message');
    });

    it('A propriedade message contém uma mensagem personalizada', async () => {
      const response = await UserService.createUser(payloadUser4);

      expect(response.message).to.contains('O "e-mail" não pode estar vazio');
    });

    it('O objeto contém a propriedade code', async () => {
      const response = await UserService.createUser(payloadUser4);
  
      expect(response).to.have.property('code');
    });

    it('A propriedade code contém 400', async () => {
      const response = await UserService.createUser(payloadUser4);

      expect(response.code).to.be.equals('400');
    });
  });

  describe('Quando o e-mail não é válido', () => {
    it('Retorna um objeto', async () => {
      const response = await UserService.createUser(payloadUser2);

      expect(response).to.be.an('object');
    });

    it('O objeto contém a propriedade message', async () => {
      const response = await UserService.createUser(payloadUser2);

      expect(response).to.have.property('message');
    });

    it('A propriedade message contém uma mensagem personalizada', async () => {
      const response = await UserService.createUser(payloadUser2);
  
      expect(response.message).to.contains('O "e-mail" deve ter o formato email@dominio');
    });

    it('O objeto contém a propriedade code', async () => {
      const response = await UserService.createUser(payloadUser2);
  
      expect(response).to.have.property('code');
    });

    it('A propriedade code contém 400', async () => {
      const response = await UserService.createUser(payloadUser2);

      expect(response.code).to.be.equals('400');
    });
  });

  describe('Quando a senha não é informada', () => {
    it('Retorna um objeto', async () => {
      const response = await UserService.createUser(userWithoutPassword);

      expect(response).to.be.an('object');
    });

    it('O objeto contém a propriedade message', async () => {
      const response = await UserService.createUser(userWithoutPassword);

      expect(response).to.have.property('message');
    });

    it('A propriedade message contém uma mensagem personalizada', async () => {
      const response = await UserService.createUser(userWithoutPassword);
  
      expect(response.message).to.contains('A "senha" deve ser informada');
    });

    it('O objeto contém a propriedade code', async () => {
      const response = await UserService.createUser(userWithoutPassword);
  
      expect(response).to.have.property('code');
    });

    it('A propriedade code contém 400', async () => {
      const response = await UserService.createUser(userWithoutPassword);

      expect(response.code).to.be.equals('400');
    });
  });

  describe('Quando a senha está vazia', () => {
    it('Retorna um objeto', async () => {
      const response = await UserService.createUser(payloadUser5);

      expect(response).to.be.an('object');
    });

    it('O objeto contém a propriedade message', async () => {
      const response = await UserService.createUser(payloadUser5);

      expect(response).to.have.property('message');
    });

    it('A propriedade message contém uma mensagem personalizada', async () => {
      const response = await UserService.createUser(payloadUser5);

      expect(response.message).to.contains('A "senha" não pode estar vazia');
    });

    it('O objeto contém a propriedade code', async () => {
      const response = await UserService.createUser(payloadUser5);
  
      expect(response).to.have.property('code');
    });

    it('A propriedade code contém 400', async () => {
      const response = await UserService.createUser(payloadUser5);

      expect(response.code).to.be.equals('400');
    });
  });

  describe('Quando a senha não é válida', () => {
    it('Retorna um objeto', async () => {
      const response = await UserService.createUser(payloadUser3);

      expect(response).to.be.an('object');
    });

    it('O objeto contém a propriedade message', async () => {
      const response = await UserService.createUser(payloadUser3);

      expect(response).to.have.property('message');
    });

    it('A propriedade message contém uma mensagem personalizada', async () => {
      const response = await UserService.createUser(payloadUser3);
  
      expect(response.message).to.contains(
        'A senha deve conter entre 8 a 16 caracteres e no mínimo uma letra maiúscula, uma mínuscula, um número e um símbolo'
      );
    });

    it('O objeto contém a propriedade code', async () => {
      const response = await UserService.createUser(payloadUser3);
  
      expect(response).to.have.property('code');
    });

    it('A propriedade code contém 400', async () => {
      const response = await UserService.createUser(payloadUser3);

      expect(response.code).to.be.equals('400');
    });
  });
});
