const express = require("express");

const app = express();
const PORT = 3000;

// add a static middleware to serve static files from the public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200)
  res.send("Hello World")
})

app.listen(PORT, () => {
  console.log(`Server started successfully at http://localhost:${PORT}`)
})
 