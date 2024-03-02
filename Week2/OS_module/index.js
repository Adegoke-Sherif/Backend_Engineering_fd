const os = require("os")

//Get the user details
const user = os.userInfo()
console.log(user)

const hostname = os.hostname()
console.log(hostname)

const platform = os.platform()
console.log(platform)

//Get end of line character
const eol = os.eol
console.log(eol)

const memory = os.freemem()
console.log(memory)

const totalMemory = os.totalmem()
console.log(totalMemory)

//Get the current architecture

const arch = os.arch()
console.log(arch)

const cpus = os.cpus()
console.log(cpus);


