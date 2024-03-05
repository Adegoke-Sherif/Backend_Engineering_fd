const mongoose = require("mongoose");

//Define a Schema
const Schema = mongoose.Schema;

//Define book schema
const BookModelSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
    max: [2024, "Year must be less than or equal to 2024"]
  },
  isbn: {
    type: String,
    required: true,
    unique: [true, "ISBN must be unique"] //Validation with Custom message
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
})

//Export the model
module.exports = mongoose.model("books", BookModelSchema) //collection name is Books. This is the name of the collection in the database