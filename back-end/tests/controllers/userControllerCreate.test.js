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

const userService = require('../../src/services/userService');
const userController = require('../../src/controllers/userController');

describe('Ao chamar o controller de createUser',() => {
  describe('quando o payload é informado com dados corretos', () => {
    const res = {};
    const req = {};

    before(async () => {
      req.body = payloadUser;

      res.status = sinon.stub()
        .returns(res);
      res.json = sinon.stub()
        .returns();

      sinon.stub(userService, 'createUser')
        .resolves(true);
    });

    after(() => {
      userService.createUser.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await userController.createUser(req, res);

      expect(res.status.calledWith(201)).to.be.equal(true);
    });
    
    it('O objeto json contém a propriedade id', async () => {
      await userController.createUser(req, res);
      
      expect(res.json).to.have.property('id');
    });
  });

  describe('quando o payload é informado sem e-mail', () => {
    const res = {};
    const req = {};

    before(() => {
      req.body = userWithoutEmail;

      res.status = sinon.stub()
        .returns(res);
      res.json = sinon.stub()
        .returns();

      sinon.stub(userService, 'createUser')
        .resolves(false);
    });

    after(() => {
      userService.createUser.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await userController.createUser(req, res);

      expect(res.status.calledWith(400)).to.be.equal(true);
    });
  
    it('é chamado o json com a mensagem "O "e-mail" deve ser informado"', async () => {
      await userController.createUser(req, res);

      expect(res.json.calledWith({ message: 'O "e-mail" deve ser informado' })).to.be.equal(true);
    });
  });
  
  describe('quando o payload é informado com o e-mail vazio', () => {
    const res = {};
    const req = {};

    before(() => {
      req.body = payloadUser4;

      res.status = sinon.stub()
        .returns(res);
      res.json = sinon.stub()
        .returns();

      sinon.stub(userService, 'createUser')
        .resolves(false);
    });

    after(() => {
      userService.createUser.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await userController.createUser(req, res);
  
      expect(res.status.calledWith(400)).to.be.equal(true);
    });
  
    it('é chamado o json com a mensagem "O "e-mail" não pode estar vazio"', async () => {
      await userController.createUser(req, res);
  
      expect(res.json.calledWith({ message: 'O "e-mail" não pode estar vazio' })).to.be.equal(true);
    });
  });

  describe('quando o payload é informado com o e-mail inválido', () => {
    const res = {};
    const req = {};

    before(() => {
      req.body = payloadUser2;

      res.status = sinon.stub()
        .returns(res);
      res.json = sinon.stub()
        .returns();

      sinon.stub(userService, 'createUser')
        .resolves(false);
    });

    after(() => {
      userService.createUser.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await userController.createUser(req, res);
  
      expect(res.status.calledWith(400)).to.be.equal(true);
    });
  
    it('é chamado o json com a mensagem "O "e-mail" deve ter o formato email@dominio"', async () => {
      await userController.createUser(req, res);
  
      expect(res.json.calledWith({ message: 'O "e-mail" deve ter o formato email@dominio' })).to.be.equal(true);
    });
  });

  describe('quando o payload é informado sem password', () => {
    const res = {};
    const req = {};

    before(() => {
      req.body = userWithoutPassword;

      res.status = sinon.stub()
        .returns(res);
      res.json = sinon.stub()
        .returns();
        
      sinon.stub(userService, 'createUser')
        .resolves(false);
    });

    after(() => {
      userService.createUser.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await userController.createUser(req, res);
  
      expect(res.status.calledWith(400)).to.be.equal(true);
    });
  
    it('é chamado o json com a mensagem "A "senha" deve ser informada"', async () => {
      await userController.createUser(req, res);
  
      expect(res.json.calledWith({ message: 'A "senha" deve ser informada' })).to.be.equal(true);
    });
  });

  describe('quando o payload é informado com o password vazio', () => {
    const res = {};
    const req = {};

    before(() => {
      req.body = payloadUser5;

      res.status = sinon.stub()
        .returns(res);
      res.json = sinon.stub()
        .returns();

      sinon.stub(userService, 'createUser')
        .resolves(false);
    });

    after(() => {
      userService.createUser.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await userController.createUser(req, res);
  
      expect(res.status.calledWith(400)).to.be.equal(true);
    });
  
    it('é chamado o json com a mensagem "A "senha" não pode estar vazia"', async () => {
      await userController.createUser(req, res);
  
      expect(res.json.calledWith({ message: 'A "senha" não pode estar vazia' })).to.be.equal(true);
    });
  });

  describe('quando o payload é informado com o password inválido', () => {
    const res = {};
    const req = {};

    before(() => {
      req.body = payloadUser3;

      res.status = sinon.stub()
        .returns(res);
      res.json = sinon.stub()
        .returns();
      
      sinon.stub(userService, 'createUser')
        .resolves(false);
    });

    after(() => {
      userService.createUser.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await userController.createUser(req, res);
  
      expect(res.status.calledWith(400)).to.be.equal(true);
    });
  
    it('é chamado o json com a mensagem "A senha deve conter entre 8 a 16 caracteres..."', async () => {
      await userController.createUser(req, res);
  
      expect(res.json.calledWith(
        { message: 'A senha deve conter entre 8 a 16 caracteres e no mínimo uma letra maiúscula, uma mínuscula, um número e um símbolo' }
      )).to.be.equal(true);
    });
  });
});
