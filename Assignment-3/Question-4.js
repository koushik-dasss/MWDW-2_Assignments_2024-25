// Write a JavaScript function that returns the fibonacci sequence up to a 
// given number of terms.
function fibonacci(n){ // recursive function 
    if(n<2){ // n == 0 return 0 also can be done , same for n == 1 
        return n ;
    }else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
} 
let n = 7 ; // user input can be taken here 
let seq = fibonacci(n);
console.log("The fibonacci sequence until "+ n + " is : " + seq);

