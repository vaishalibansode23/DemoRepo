let arr=[1,2,3,4,5];
console.log("Array elements are:");
for(let i=0;i<arr.length;i++){
    //console.log(arr[i]);
    console.log(`Element at index ${i} is ${arr[i]}`);
} 

let sum=arr.reduce((a,b)=>a+b,0);
console.log("Sum of array elements is:",sum);