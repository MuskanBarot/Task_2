// const fs=require('fs');

// const file=fs.readFileSync('./text1.txt','utf-8');
// console.log(file);
const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length-1 
console.log(lines)