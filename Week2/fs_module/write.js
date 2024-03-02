const fs = require("fs")
const path = require("path")

const textFilePath = path.join(__dirname, "files", "new.txt")
const content = "This is a new file i just created"

//File gets created in the file system because it does not exist yet
fs.writeFile(textFilePath, content, (err) => {
  if(err) {
    console.log(err)
    return
  }
  console.log("File written successfully")
})

//append to a file
const newContent = "\nThis is another line"
fs.appendFile(textFilePath, newContent, (err) => {
  if(err) {
    console.log(err)
    return
  }
  console.log("Addition to file successful")
})


