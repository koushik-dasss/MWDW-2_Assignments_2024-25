// Write a JavaScript Function that will convert Celsius to Farhenheit. 
function celToF(cel){
    let f = (cel*9/5)+32;
    return f;
}
let cel = 10 ; // cel = 10 degree celsius , user input also can be done 
console.log(cel+ " degree  celcius is " + celToF(cel) + " degree farheinheit ");

