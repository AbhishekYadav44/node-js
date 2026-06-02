// const sum = require('./math')
// const mul = require('./math')

// const {sum , mul}  = require("./math")  //  object destructruing alson we can destrutrure using array but for that u have to exports in the form of array
const [sum , mul] = require("./math")

console.log(sum(1,2,3,4));
console.log(mul(1,2,3,4));