// how to insert in fast elements in array
const arr = [10, 20, 30, 40, 50];
function insertFirst(arr, value) {
  for (let i = arr.length - 1; 0 <= i; i--) {
    arr[i + 1] = arr[i];
  }
  delete arr[0];
  arr[0] = value;
  console.log(arr);
}
insertFirst(arr, 89);


