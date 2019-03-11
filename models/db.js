// @ts-nocheck
const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/codequotes", {
  logging: false
});

const Quote = db.define("quote", {
  quote: Sequelize.TEXT,
  author: Sequelize.STRING,
  source: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
        notEmpty: true,
        isUrl: true
    }
  }
});

Quote.findRandom = async function () {
  const totalRowCount = await Quote.count()
  const randomId = Math.ceil(Math.random() * totalRowCount)
  return await Quote.findById(randomId)
}

module.exports = {
  db,
  Quote
};