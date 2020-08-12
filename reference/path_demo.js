const path = require ('path');
 
//BAse file name
console.log(path.basename(__filename)); //output:- path_demo.js

//Directory name
console.log(path.dirname(__filename));//output:- /home/pundreek/coding/Javascript/node_crash_course/reference

//File extension 
console.log(path.extname(__filename));// output:- .js

//CReate path object 
console.log(path.parse(__filename));

//Concatenate paths

console.log(path.join(__dirname,'test','hello.html'));

