const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const PORT = 30000;

//add third party middleware to log all requests to the console
app.use(logger("dev"));

// add third party middleware to parse the request body
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200)
  res.send("Hello World");
})

// Request.body is an Object that contains the request body. It is parsed by the bodyParser middleware
app.use((req, res, next) => {
  const apiKey = req.body.apiKey;
  if(apiKey) {
    next();
  } else {
    res.status(401).send("unauthorized")
  }
})

app.get("users", (req, res) => {
  res.status(200)
  res.json([
    {
      id: 1,
      name: "wale"
    }
  ])
})

app.listen(PORT, () => {
  console.log(`Server started successfully at http://localhost:${PORT}`)
})
 
