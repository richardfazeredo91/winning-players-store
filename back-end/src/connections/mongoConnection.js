const { MongoClient } = require('mongodb');
require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { HOST } = process.env;
const DB_NAME = 'WinningPlayers';
const MONGO_DB_URL = `mongodb://${HOST || 'mongodb'}:27017/${DB_NAME}`;

let db = null;

const getConnection = () => (
  db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then((conn) => {
        db = conn.db(DB_NAME);
        return db;
      })
      .catch((err) => console.error(err))
);

module.exports = { getConnection };
