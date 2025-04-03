// Write a JavaScript program to check whether the given number is: 
// Palindrome Number or Not.
let n = 121; // user input can also be taken 
let rev = 0 ; 
let num = n ; 
while(num!=0){
    rev = (rev*10)+ (num%10);
    num = Math.floor(num/10);
} 
if(rev==n){
    console.log(n+" is a palindrome number");
}else{
    console.log(n+ " is not a palindrome number");
}