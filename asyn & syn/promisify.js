const fs = require("fs")
const promisify = require("util").promisify
const readFile = promisify(fs.readFile)

const fun = async() => {
    let x = await readFile('./asyn & syn/x.txt')
    let y = await readFile('./asyn & syn/y.txt')
    let z = await readFile('./asyn & syn/z.txt')
    return [x, y, z]
}

fun().then(result => console.log(result))