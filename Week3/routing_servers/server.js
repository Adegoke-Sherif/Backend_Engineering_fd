const http = require("http");

const {authors, books} = require("./fixtures");

const PORT = 8000
const HOST_NAME = "localhost";

const server = http.createServer(requestHandler)

server.listen(PORT, HOST_NAME, () => {
  console.log(`server is listening on ${HOST_NAME}:${PORT}`)
})

function requestHandler(req, res) {
  switch(req.url) {
    case "/books":
      res.writeHead(200)
      res.end(JSON.stringify(books))
      break
    case "/authors":
      res.writeHead(200)
      res.end(JSON.stringify(authors))
      break;
    default:
      res.writeHead(404)
      res.end("Route not supported")
      break
  }
   res.end()
  }   
