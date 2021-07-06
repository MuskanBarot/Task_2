const { error } = require('console');
const http=require('http');

const url=process.argv[2];

http.get(url,(res)=>{
    let result="";
    res.setEncoding('utf-8')
    res.on('error',(error)=>{
        console.log(error);
    })

    res.on('data',(data)=>{
        result+=data;
    })
    res.on('end',()=>{
        console.log(result.length);
        console.log(result);
    })
})