/**
 * Path 
 * File system 
 */
const path = require("path")
console.log(path.parse(__filename))
/**
 * {
  root: 'E:\\',
  dir: 'E:\\study\\node',
  base: 'innerModule.js',
  ext: '.js',
  name: 'innerModule'
}
 */

const fs = require("fs")
const files = fs.readdirSync("./")//[ '.git', 'incupsulation', 'innerModule.js', 'require_export' ]
console.log(files)
fs.readdir("./",function(error, files){
    console.log(files)//[ '.git', 'incupsulation', 'innerModule.js', 'require_export' ]
})