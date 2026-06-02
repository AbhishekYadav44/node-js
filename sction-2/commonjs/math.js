

function sum (...nums){
    return   nums.reduce((acc,curr) => acc + curr)
}
function mul (...nums){
    return   nums.reduce((acc,curr) => acc * curr)
}


// module.exports = sum;

// modue.exports is an object ham jo bhi yha se export krenge reuire whi return krega 

module.exports.sum = sum;
module.exports.mul =  mul;
module.exports = "";
module.exports = undefined
module.exports = {
    sum,
    mul
}
module.exports = [
    sum,
    mul
]