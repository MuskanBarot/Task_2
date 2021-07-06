// const readline = require("readline-sync");
// let array=readline.question();
// let a=[];
// for(i=0;i<array;i++){
    //console.log(Number(process.argv[3]));

    let result = 0

    for (let i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }
    
    console.log(result)
    //console.log(process.argv[1])