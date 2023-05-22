// filter methods in JavaScript 
var arr = [29, 80, 28, 290, 29, 100, 298, 70];
let result = arr.filter(function (value) {
  return value % 2 === 0;
});
console.log(result);

// behind the since
function myFilter(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let evenNumber = myFilter(arr, function (value) {
  return value % 2 === 0;
});
console.log(evenNumber);
