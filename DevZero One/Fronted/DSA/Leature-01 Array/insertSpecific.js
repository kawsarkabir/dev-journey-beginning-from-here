// insert Specific elements
let arr = [1, 2, 3, 4, 5];
function insertSpecific(arr, terget, value) {
  for (let i = arr.length - 1; terget <= i; i--) {
    arr[i + 1] = arr[i];
  }
  delete arr[terget];
  arr[terget] = value;
  console.log(arr);
}
// fast argument hlo arr ta 2nd ta holo sei position indexNumber and last ar ta holo amra jei elements add korte chai
insertSpecific(arr, 2, 7);
