// find odd sum  in array
function sumOddNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
let sumArry = [1, 2, 3, 4, 83];
console.log(sumOddNumbers(sumArry));  