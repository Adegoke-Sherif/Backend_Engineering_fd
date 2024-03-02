const http = require("http");
const fs = require("fs");
const path = require("path");

const booksDbPath = path.join(__dirname, "db", "books.json");

const PORT = 4000
const HOST_NAME = "localhost"
function requestHandler(req, res) {
  if(req.url === "/books" && req.method === "GET") {
    getAllBooks(req, res)
  }else if(req.url === "/books" && req.method === "POST") {
    addBook(req, res)
  } else if(req.url === "/books" && req.method === "PUT") {
    updateBook(req, res)
  } else if(req.url === "/books" && req.method === "DELETE") {
    console.log("DELETE REQUEST TO BOOKS ROUTE")
  }
}

function getAllBooks(req, res) {
  fs.readFile(booksDbPath, "utf8", (err, data) => {
    if(err) {
      console.log(err)
      res.writeHead(400)
      res.end("An error occurred")
    }
    res.end(data)
  })
} 
function addBook(req, res) {
  const body = []
  req.on("data", (chunk)=> {
    body.push(chunk)
  })
  req.on("end", () => {
    const parsedBook = Buffer.concat(body).toString()
    const newBooks = JSON.parse(parsedBook)
    // console.log(parsedBook)

    //add the new book to the end of the existing books array
    fs.readFile(booksDbPath, "utf8", (err, data) => {
      if(err) {
        console.log(err)
        res.writeHead(400)
        res.end("An error occurred")
      }    
      const oldBooks = JSON.parse(data)
      const allBooks = [...oldBooks, newBooks]


      //Save to DB
      fs.write(booksDbPath, JSON.stringify(allBooks), (err) => {
        if(err) {
          console.log(err);
          res.writeHead(500);
          res.end(JSON.stringify({
            message: "Internal Server Error. Could not save book to database"
          }));
      }   
      res.end(JSON.stringify(newBooks));
      });
    })
  })
}
  function updateBook(req, res) {
    const body = []
  req.on("data", (chunk)=> {
    body.push(chunk)
  })
  req.on("end", () => {
    const parsedBook = Buffer.concat(body).toString()
    const detailsToUpdate = JSON.parse(parsedBook)
    const bookId = detailsToUpdate.id

    fs.readFile(booksDbPath, "utf8", (err, data) => {
      if(err) {
        console.log(err)
        res.writeHead(400)
        res.end("An error occurred")
      }    
      const bookIndex = JSON.parse.find()
      //find the book in the database
      const oldBooks = JSON.parse(data)
      const allBooks = [...oldBooks, newBooks]
    })
  })
  }

const server = http.createServer(requestHandler)

server.listen(PORT, HOST_NAME, () => {
booksDB = JSON.parse(fs.readFileSync(booksDbPath, "utf8"));
console.log(`Server is listening on ${HOST_NAME}:${PORT}`)
})