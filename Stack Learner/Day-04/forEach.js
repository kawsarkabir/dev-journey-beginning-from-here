// forEach implement in JavaScript
 let arr = [1, 2, 3, 4, 5]
/*arr.forEach(function(value, index, arr){
    console.log(value, index, arr);
}) */

//  Behind the scien of forEach in JAvaScript 
function myForEach(arr, cb){
    for(let i = 0; i<arr.length; i++){
        cb(arr[i], i, arr);
    }
}
myForEach(arr, function(value, index, arr){
    if(arr[index] % 2 === 0){
        console.log('its even num: ', value);
    }
})

