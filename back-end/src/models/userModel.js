const mongoConnection = require('../connections/mongoConnection');

const createUser = async (user) => {
  const usersCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('users'));

  const { insertedId: id } = await usersCollection
    .insertOne(user);

  return { id };
};

module.exports = { createUser };
