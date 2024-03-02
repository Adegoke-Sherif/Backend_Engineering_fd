const http = require("http");

const HOSTNAME = "localhost"
const PORT = 8000

function requestHandler(req, res) {
  res.writeHead(200)
  res.end("Hello From the server!")
}

const server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server started successfully at http://${HOSTNAME}:${PORT}`)
})