// Write a JavaScript function that finds the second largest and second 
// smallest number in an array of numbers. 
function Largest(arr){
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i]>max1){
            max1 = arr[i];
        }
    }
    return max1;
}
function Smallest(arr){
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i]<min1){
            min1 = arr[i]
        }
    }
    return min1;
}
function SecondLargest(arr){
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i]>max2 && arr[i]!= Largest(arr)){
                max2 = arr[i];
        }
    }
    return max2;
}
function SecondSmallest(arr){
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i]<min2 && arr[i]!= Smallest(arr)){
            min2 = arr[i];
        }
    }
    return min2;
}
let arr = [1,100,4,78,67,45,98,76,389,456,398467,2765,287,34,90,1267]; // user input can also be done 
let max1 = arr[0]  , max2 = -Infinity ;
let min1 = arr[0], min2 = Infinity ;
console.log("The largest element in the array is : "+ Largest(arr));
console.log("The smallest element in the array is : "+ Smallest(arr));
console.log("The second largest element in the array is : "+ SecondLargest(arr));
console.log("The second smallest element in the array is : "+ SecondSmallest(arr));


