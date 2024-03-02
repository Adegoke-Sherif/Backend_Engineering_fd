const express = require("express");
const bodyParser = require("body-parser");

const booksRoute = require("./routes/books");
const authorRoute = require("./routes/authors");

const PORT = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.use("/books", booksRoute);
app.use("/authors", authorRoute);

app.get("/", (req, res) => {
  res.end("Home Page");
}); 

app.get("/books", (req, res) => {
  res.end("About Page");
});

app.post("/contact", (req, res) => {
  res.end("Contact Page");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})