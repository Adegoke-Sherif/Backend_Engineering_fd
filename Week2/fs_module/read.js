const fs = require("fs")
const path = require("path")

const poemFilePath = path.join(__dirname, "files", "poem.txt")

fs.readFile(poemFilePath, "utf8", (err, data) => {
  if(err) {
    console.log(err)
    return
  }
  console.log("File read successfully")
  console.log(data)
})