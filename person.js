//Module Wrapper Function
// (function(exports,require,module, __filename, __dirname){

// })
// console.log(__dirname, __filename); // "/home/pundreek /home/pundreek/person.js" is the output for the same.


const person = {
    name: 'John Doe',
    age: 30
}
//if we want to use this person object somewhere else , we just simply export it . 
module.exports = person;




//{ getting error as Person is not defined , if import this class as "Person"
/*class Person{
    constructor (name, age){
        this.name =name;
        this.age = age;
    }
    //creating a greeting method inside this class. 
    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}
module.exports = Person; */
//}