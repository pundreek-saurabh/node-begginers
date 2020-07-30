//for importing an object {
    //below 2 lines could be uncommented for testing purpose.
// const person = require('./person');
// console.log(person);
//}
//Getting error in executing this , needs to be solved . 
/*const person1 = new Person('John Doe', 30);
person1.greeting();*/

 const http = require('http');
 const path = require('path');
 const fs = require('fs');
const { application, json } = require('express');

 const server = http.createServer((req,res) =>{
    
    
    
    if (req.url === '/') {
        fs.readFile(path.join(__dirname,'public','index.html'),(err, content)=>{
            if(err) throw err;
            //res.writeHead(200,{'Content-Type' : text/html}); //adding this line gives server not found.
            res.end(content); //used to serve the page.
        })
    }



    // if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname,'public','about.html'),(err, content)=>{
    //         if(err) throw err;
    //         //res.writeHead(200,{'Content-Type' : text/html}); //adding this line gives server not found.
    //         res.end(content); //used to serve the page.
    //     })
    // }
    // My about page is not hosting anyway ...error needs to be solved (uncomment line 23-29)
    
    
    
    
    // if (req.url === '/api/users') {
    //     //Here in case of rest APIs , we fetch data from database
    //     const users =[
    //         { name: 'Bob Smith', age: 40},
    //         { name: 'John Doe', age: 30}
    //     ];

    //     res.writeHead(200,{'Content-Type' : 'application/json'});
    //     res.end(JSON.stringify(users));
    // }


    //Build file path (dynamic){
    let filePath = path.join (__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // console.log(filePath);
    // res.end();
    //}(uncomment and remove this pair of braces)


    //Extension of File 
    let extname = path.extname(filePath); //it gives the extension that file has been loaded.

    //Initial content type 
    let contentType = 'text/html';
    //check extension and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case 'image/png':
            break;
        case '.js':
            contentType = 'image/jpg';
            break;
    }

    //Read file
    fs.readFile(filePath,(err,content)=>{
        if(err){
            if(err.code == 'ENOENT'){
                //Page not found
                fs.readFile(path.join(__dirname,'public','404.html'),
                (err, content)=>{
                    res.writeHead(200,{'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                })
            } else{
                //some server error
                res.writeHead(500);
                res.end(`Server error : ${err.code}`);
            }
        }else {
            //Successful response
            res.writeHead(200,{'Content-Type': contentType});
            res.end(content,'utf8');
        }
    });

 });

 //Summary of making a server starts from approx (1.20.00 == hr.min.sec)

const PORT =process.env.PORT || 5000;

 server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));