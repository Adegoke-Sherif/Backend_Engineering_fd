const db = require("../models")
const bookModel = db.books

async function getAllBooks(req, res) {
  try {
    const books = await bookModel.findAll()
    res.status(200).json(books)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}

async function addBook(req, res) {
  const bookInfo = req.body
  try {
    const book = await bookModel.create(bookInfo)
    res.status(200).json({
      message: "Book Added successfully",
      data: db.book
    })
  } catch(error) {
    console.log(error)
    res.status(500).send(error)
  }
}


async function updateBookById(req, res) {
  const bookid = req.params.id
  const bookUpdateInfo = req.body
  try {
    const book = await bookModel.update(bookUpdateInfo, {
      where: {
        id: bookid
      }
    })
    res.status(200).json({
      message: "Book Updated successfully",
      data: db.book
    })
  } catch(error) {
    console.log(error)
    res.status(500).send(error)
  }
}

async function deleteBookById(req, res) {
  const bookid = req.params.id
  try {
    const book = await bookModel.destroy({
      where: {
        id: bookid
      }
    })
    res.status(200).json({
      message: "Book deleted successfully",
      data: db.book
    })
  } catch(error) {
    console.log(error)
    res.status(500).send(error)
  }
}

module.exports = {
  getAllBooks,
  addBook,
  updateBookById,
  deleteBookById
}