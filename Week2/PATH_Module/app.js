const path = require("path")


//Get path Seperator
const seperator = path.sep;
console.log(seperator)

//Get the base Name

const baseName = path.basename("C:\Users\Sheriff\Desktop\Week2\PATH_Module\package.json")
console.log(baseName);

const dirName = path.dirname("C:\Users\Sheriff\Desktop\Week2\PATH_Module\package.json")
console.log(dirName)

const extName = path.extname("C:\Users\Sheriff\Desktop\Week2\PATH_Module\app.js")
console.log(extName)

const joinPath = path.join("Week2", "path", "package_manager")
console.log(joinPath)

const cwd = path.resolve()
console.log(cwd)

const dir = path.dirname(__dirname)
console.log(dir)