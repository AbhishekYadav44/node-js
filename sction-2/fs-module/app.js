import fs from "node:fs/promises";

//  fs.readFileSync("./index.html" , "utf-8") // readFileSync is a syncronous function so it does no take dcallback and whe it execo=uts it bocks js thread
//  fs.readFile("./index.html" , "utf-8", (err,data)=> {
//     console.log( data )
// })
const content  = await  fs.readFile("./index.html" , "utf-8")
console.log(content)
console.log("hi")