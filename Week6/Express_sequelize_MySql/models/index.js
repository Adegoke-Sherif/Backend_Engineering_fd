const { Sequelize, DataTypes } = require("sequelize");
const CONFIG = require("../config/dbConfig")

const bookModel = require("./book")

const  sequelize = new Sequelize(
  CONFIG.DB_NAME,
  CONFIG.DB_USER,
  CONFIG.DB_PASSWORD,
  {
    host: CONFIG.DB_HOST,
    dialect: CONFIG.DB_DIALECT
  }
)

sequelize.authenticate()
    .then(() => {
      console.log("Connection successful")
    }).catch((err) => {
      console.log(err)
    })

    const db = {}

    db.sequelize = sequelize
    db.Sequelize = Sequelize

    //add models
    db.books = bookModel(sequelize, DataTypes);

    db.sequelize.sync({ force: false })
        .then(() => {
          console.log("Tables sync successfully")
        }).catch((err) => {
          console.log(err)
        })


        module.exports = db

