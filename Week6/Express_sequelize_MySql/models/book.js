
module.exports = (sequelize, DataTypes) => {
  //Create Book Model

  const bookModel = sequelize.define("Book", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isbn: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: "books"
  })
  return bookModel
}