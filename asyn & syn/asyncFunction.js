const { fs } = require("fs")

async function run(){
    return "a"
}

run().then(result => console.log(result))

const fun = async() => {
    let x = await readFile('./asyn & syn/x.txt');
    let y = await readFile('./asyn & syn/y.txt');
    let z = await readFile('./asyn & syn/z.txt');
    return [x, y, z]
}

const readFile = (path) => {
    return new Promise(function() {
        fs.readFile(path, "utf-8", function(error, reject){
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

fun().then(result => console.log(result))