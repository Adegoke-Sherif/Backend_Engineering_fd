const express = require("express")
const BookModel = require("../model/books")
const bookRoute = express.Router()

//CRUD routes: Read
bookRoute.get("/", (req, res) => {
  BookModel.find({})
      .then((books) => {
        res.status(200).send("books")
      }).catch((err) => {
        console.log(err)
        res.status(500).send("err")
      })
})
//Read By ID
bookRoute.get("/:id", (req, res) => {
  const id = req.params.id
  BookModel.findById(id)
    .then((book) => {
      res.status(200).send(book)
    }).catch((err) => {
      console.log(err)
      res.status(400).send(err)
    })
})
//Create
bookRoute.post("/", (req, res) => {
  const book = req.body
  console.log(book)

  BookModel.create(book)
    .then((book) => {
      res.status(201).send({
        message: "Book added successfully",
        data: book
      })
    }).catch((err) => {
      res.status(400).send(err)
    })
  // Add the book to the database
})

//Update
bookRoute.put("/:id", (req, res) => {
  const id = req.params.id
  const book = req.body
    BookModel.findByIdAndUpdate(id, book, {new: true})
      .then((book) => {
        res.status(200).send(book)
      }).catch((err) => {
        console.log(err)
        res.status(400).send(err)
      })
})

//Delete
bookRoute.delete("/:id", (req, res) => {
  const id = req.params.id
  BookModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({
        message: "Deletion successful",
        data: ""
      })
    }).catch((err) => {
      console.log(err)
      res.status(400).send(err)
    })
})







module.exports = bookRoute