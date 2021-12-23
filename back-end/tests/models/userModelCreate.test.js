const { expect } = require('chai');
const sinon = require('sinon');
const { payloadUser } = require('../mocks/userMock');
const userModel = require('../../src/models/userModel');
const { MongoClient } = require('mongodb');
const { getConnection } = require('../mocks/mongoConnection');

describe('Insere um novo usuário no Banco de dados', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  afterEach(async () => {
    await connectionMock.db('WinningPlayers').collection('users').drop();
  });

  after(() => {
    MongoClient.connect.restore();
  });


  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await userModel.createUser(payloadUser);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo usuário inserido', async () => {
      const response = await userModel.createUser(payloadUser);

      expect(response).to.have.a.property('id');
    });
    
    it('deve existir um usuário com o email cadastrado!', async () => {
      await userModel.createUser(payloadUser);

      const userCreated = await connectionMock
        .db('WinningPlayers')
        .collection('users')
        .findOne({ email: payloadUser.email });
      expect(userCreated).to.be.not.null;
    });

    it('tal usuário deve ter login e password cadastrados', async () => {
      await userModel.createUser(payloadUser);

      const userCreated = await connectionMock
        .db('WinningPlayers')
        .collection('users')
        .findOne({ email: payloadUser.email });
      expect(userCreated).to.have.keys("_id", "email", "password");
    });
  });
});
