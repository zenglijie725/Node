module.exports = function(message){
    console.log(message)
}
//you can assign the value of module.exports, but can't assign exports, 
//because exports = module.exports, you shouldn't change its address
exports.endPoint = 123;