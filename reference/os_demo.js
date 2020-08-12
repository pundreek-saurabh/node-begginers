const os = require('os');

//platform 
console.log(os.platform()); //output:- linux

//CPU architecture
console.log(os.arch()); //since bcz arch is a method so we need a (). Output is x64.

//CPU core info 
console.log(os.cpus());

//Free memory 
console.log(os.freemem());

//Total memory 
console.log(os.totalmem());

//Home directory
console.log(os.homedir());

//Uptime
console.log(os.uptime()); //It gives you the number of seconds which your system has been up.






