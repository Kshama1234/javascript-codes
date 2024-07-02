//#Primitive datatype:-

// 7 types:- String, Number, boolean, null, undefined, symbol, BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const OutsideTemp = null
 let usermail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id == anotherId); 


const bigNumber = 435454546744643312323n

// Reference type:- Non Primitive

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "kshama",
    age: 21,
}

const myFunction = function() {
console.log("Hello World");
}

console.log(typeof myFunction());