const fs = require('fs')

fs.readFile(process.argv[2],(err,contents)=>{
    if(err){
        console.log(err);
    }
    const lines = contents.toString().split('\n').length-1 
console.log(lines)
})
