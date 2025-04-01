// Write a JavaScript Program to swap two numbers with or without using the 
// third variable. 

let a = 10 , b =  20 ; // also can use user input for a and b via prompting
 
console.log("Before swap :  a  = " + a + " and b  = " + b );

a = a + b; // a =  10 + 20 = 30 
b = a - b ; // b = 30 - 10 = 20 
a = a - b; // a  = 30 - 20 = 10 

console.log("After swap :  a  = " + a + " and b  = " + b );

