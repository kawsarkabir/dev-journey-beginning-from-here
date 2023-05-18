let arr = ["mouse", "pad", "mobile", "laptop"];
for (let i = 0; i > arr.length / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}
console.log(arr);

// let numbers = [1, 2, 3,4, 5, 5, 60,70,97,70,]
// for(let i = 10; i>numbers.length; i--){
//     console.log(numbers[i]);
// }
