// Write a JavaScript program to check whether the given number is an 
// Armstrong Number or Not.

// TO THE POWER OF NO.  OF  DIGITS IS TO BE DONE [ NOT SPECIFIC TO  CUBES ONLY ]
let n = 9474 , num =  n ; // can take n as user input also 
let number = n ; 
let sum = 0 , ctr = 0 ; 
while(num!=0){
    num = Math.floor(num/10);
    ctr++;
}
while(number!=0){
    let digit = number%10 ;
    sum+=(digit**ctr);
    number = Math.floor(number/10);
}
if(sum==n){
    console.log(n+" is an armstrong number");
}else{
    console.log(n+" is not an armstrong number .");
    
}
