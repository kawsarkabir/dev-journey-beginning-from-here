//  Map Function in Javascript
let arr = [1, 2, 3]
/* arr.map(function(value){
    let sqr = value * value
    console.log(sqr);
}) */

function myMap(arr, cb){
    let newArr = []
    for(let i = 0; i<arr.length; i++){
        let temp = cb(arr[i], i, arr);
        newArr.push(temp)
    }
    return newArr;
}
let sqr = myMap(arr, function(value){
    return value * value
})
console.log(sqr);
