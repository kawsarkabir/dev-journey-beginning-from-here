// Reduce in JavaScript
let arr = [1, 2, 3, 4 ,5]
let sum = arr.reduce(function(prev, curr){
    return prev + curr
}, 100)
console.log(sum);

let max = arr.reduce(function(prev, curr){
    return Math.max(prev, curr)
}, 0)
console.log(max);

// behind the since 
function myReduce(arr, cb, acc){
    for(let i = 0; i<arr.length; i++){
        acc = cb(acc, arr[i])
    }
    return acc
}

let sum2 = myReduce(arr, function(prev, curr){
    return prev + curr
}, 0)
console.log(sum2);

let min = myReduce(arr, function(prev, curr){
    return Math.min(prev, curr)
}, arr[0])
console.log(min);