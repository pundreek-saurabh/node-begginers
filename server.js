const http = require('http');
//here request object and response object 
const server = http.createServer((req,res)=>{console.log(req.url, req.method);

    //set header content type 
    res.setHeader('Content-Type', 'text/html');

    res.write('<p>hello , ninjas </p>');
    res.write('<p>hello again ninjas</p>');

    res.end();
});
server.listen(3000,'localhost',()=>{console.log("listening for request at port number 3000");
});