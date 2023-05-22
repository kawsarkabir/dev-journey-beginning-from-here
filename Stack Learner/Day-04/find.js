// find methods in JavaScript
let arr = [1, 3, 4, 5, 380, 90, 38];
let result = arr.find(function (value) {
  return value === 5;
});
console.log(result);

// behind the since
function myFind(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
}
let result2 = myFind(arr, function(value){
    return value === 5;
})
console.log(result2);
