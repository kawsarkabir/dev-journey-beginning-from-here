// array tervarsing
const arr = [23, 34, 89, 20, 67, 89]
for(let i = 0; i<arr.length; i++){
    // console.log(arr[i]);
    arr[i] += 2

}
// console.log(arr);

let sum = 0
for(let i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log(sum);



//  even number 
for(let i = 0; i< arr.length; i++){
    if(arr[i] % 2 === 0){
        console.log(arr[i]);
    }
}


// odd number 
for(let i = 0; i< arr.length; i++){
    if(arr[i] % 2 === 1){
        console.log(arr[i]);
    }
}