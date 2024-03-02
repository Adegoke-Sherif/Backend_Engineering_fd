const fs = require("fs")
const path = require("path")

const poemFilePath = path.join(__dirname, "files", "poem.txt")

console.log(poemFilePath)

fs.readFile(poemFilePath, 'utf8', (err, data) => {
  if(err) {
    console.log(`An error occured while reading the file: ${err}`)
    return
  } 
  console.log(data)
})

//Opening file Synchronously

// const poemFd = fs.openSync(poemFilePath, "r")
// const poemData = fs.readFileSync(poemFd, "utf8")
// console.log("File description:")