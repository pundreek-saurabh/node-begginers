const url = require('url');

const myUrl = new URL(
    'https://github.com/pundreek-saurabh,status=active'
    ); // refernece error : URL is not defined (need to be solved)

//to get the serialized URL.
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);
//Host name (does not get port)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname); // it gives the actual path or file.

//serialized query
console.log(myUrl.search);

//Params object 
console.log(myUrl.searchParams);
//Add params 
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through params 
myUrl.searchParams.forEach((value,name)=>console.log(`$(name) : $(value)`));



