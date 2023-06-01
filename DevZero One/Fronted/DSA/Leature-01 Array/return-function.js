// return funciton
let arr = [1, 2, 3, 4, 5];
function returnFunc(data, value) {
  let arr = [...data];
  for (let i = arr.length - 1; 0 <= i; i--) {
    arr[i + 1] = arr[i];
  }
  delete arr[0];
  arr[0] = value;
  return arr;
}
let result = returnFunc(arr, 10);
console.log(arr);
console.log(result);
