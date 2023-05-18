let num = [12, 24, 45, 59]
let num2 = [1, 2, 3, 4, 5]
console.log(num.join(' '));

// fill methods
num.fill(0)
console.log(num);

// concat
let num3 = num.concat(num2)
console.log(num3);

// check is Array
console.log(Array.isArray(num));

//=== Array.from diyew ar kaz ta kora jaiiiiiiiii ===
let a = [1, 2]
let b = [...a]
let c = b[0] = 5
console.log(a);
console.log(b);