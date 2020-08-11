//This in video will taught till 37.49 !
//Only run one module at a time , rest all should be commented out for that session.

const fs = require ('fs');
const path = require('path');

//create folder 

fs.mkdir(path.join(__dirname, '/test'),{}, err => {
    if(err) throw err;
    console.log('Folder created...');
});
//here it's throw error , don't know why ..need t be solved 


//Create and write to file

fs.writeFile(path.join(__dirname, '/test','hello.txt'),'Hello world !', err => {
    if(err) throw err;
    console.log('fole written too...');
});

//To apend file :-

fs.appendFile(path.join(__dirname, '/test','hello.txt'),'I love Node.js ', err => {
    if(err) throw err;
    console.log('fole written too...');
});
//here it's throw error , don't know why ..need t be solved 

//Read file 
fs.readFile(path.join(__dirname, '/test', 'hello.txt'),'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
});

//rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'),path.join(__dirname, '/test', 'helloWorld.txt'), (err,data) => {
    if(err) throw err;
    console.log('File renamed...');
});
