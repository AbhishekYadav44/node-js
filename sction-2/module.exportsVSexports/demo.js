

function sum (...nums){
    return   nums.reduce((acc,curr) => acc + curr)
}
function mul (...nums){
    return   nums.reduce((acc,curr) => acc * curr)
}

exports.sum = sum  //  remember one thing we can expots things using exports only single module at a time 


// module.exports = sum;

// modue.exports is an object ham jo bhi yha se export krenge reuire whi return krega 

console.log(module.exports === exports) //  true  
// module.exports = {
//     sum,
//     mul
// }

console.log(module.exports === exports)  //  it rturn false;  due to = operator
// because exports is a obj of module 

// example

// let User = {
//     name : "abhishek",
//     age: 21,
//     address  :  {
//          city : "badaun",
//          pincode : 12123212
//     }
// }

// const address = User.address;

// so this address is simloar to exports and user.address is similear to modules.exports


