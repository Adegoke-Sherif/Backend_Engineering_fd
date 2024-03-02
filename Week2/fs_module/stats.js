const fs = require("fs")
const path = require("path")

const poemFilePath = path.join(__dirname, "files", "poem.txt")
fs.stat(poemFilePath, (err, stats) => {
  if(err) {
    console.log(err)
  } else {
    console.log(stats)
    //Specific stats
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.size)
  }
})
