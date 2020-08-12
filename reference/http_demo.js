//Demo server is here. :-

const http = require ('http');

//create server object 
http.createServer((req,res)=>{
    //Write a respomse
    res.write('Hello World');
    res.end()
}).listen(5000,()=> console.log('server running...'));