// Write a JavaScript function that returns the fibonacci sequence up to a 
// given number of terms.
function fibonacci(n){ // using ITERATION
    let sum = 0 , a = 0 , b = 1 ;
    for(let i = 0 ; i< n ; i++){
        sum = a+b ;
        a = b ; 
        b = sum;
    }
    return sum;

}
let n =  6 ; // user input can also be taken here
console.log("The fibonacci sequence up to " + n + " terms is: " + fibonacci(n));
