// Write a JavaScript function that takes an array of numbers as input and 
// returns a new array containing only the odd numbers. 
function OddElements(arr){
    let oddElements = [];
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i]%2!=0){
            oddElements.push(arr[i]);
        }       
    }
    return oddElements;
}
let arr = [2,4,5,6,7,8,9,1,100,102,3897,3476,27348,94729,1276,34,276,90,67,1289,3526,298]; // user input can also be taken here
console.log("Odd elements in the array are : "+ oddElements(arr));

