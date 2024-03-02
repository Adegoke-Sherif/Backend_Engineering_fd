const express = require("express");

const app = express();
const PORT = 3000;

//to create a middleware, we need to use the app.use() method.
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next(); //This is require to continue to the next middleware or route handler
})

app.get("/", (req, res) => {
  // Express extends the response object  with a lot of utility like
  // res.send() ==> use to send a express.response to the client
  // res.json() ==> Used to send a JSON object to the client
  // res.status() ==> Used to set status code of the express.response
  // res.sendFile() ==> Used to send a file to the client
  // res.render() ==> Used to render a view to the client
  res.status(200)
  res.send("Hello World")
})

app.use((req, res, next) => {
  const apiKey = req.query.apiKey;
  if(apiKey) {
    next();
  } else {
    res.status(401).send("unauthorized");
  }
});

app.get("/users", (req, res) => {
  res.status(200)
  res.json([
    {
      id: 1,
      name: "Yemi Wale",  
    },
    {
      id: 2,
    name: "Olaolu juma"

    }        
  ])
})



app.listen(PORT, () => {
  console.log(`Server started successfully at http://localhost:${PORT}`)
})
 