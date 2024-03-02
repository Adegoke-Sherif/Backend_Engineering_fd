const fs = require("fs")
const path = require("path")

// open a folder
const folderPath = path.join(__dirname, "files", "new.txt")
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.log(err)
    return
  }
  console.log("Folder opened successfully")
  console.log(files)
})

// create a folder
const newFolderPath = path.join(__dirname, "files", "new_folder")
fs.mkdir(newFolderPath, (err) => {
  if(err) {
    console.log(err)
    return
  }
  console.log("Folder created successfuly")
})

//Rename a folder
const newFolder = path.join(__dirname, "files", "new_folder_renamed")
fs.rename(newFolderPath, newFolder, (err) => {
  if(err) {
    console.log(err)
    return
  }
  console.log("Folder rename successfully")
})


// fs.rmdir