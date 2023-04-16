// Operator is not a +-*/
/* 
1.Arithmetic Operator +, -, *, /, % 
2. Assingment Operator =, +=, -=, *=, /=,%=
3. Relational Operator >, <, >=, <=,==, !=
4. Logical Operator &&,||, !
5. increment Decrement ++, --
6.Bitwise
*/



// arithmetic Operator
console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(10 / 20);


// assingment Operator
let aso = 10;
console.log(aso += 5);
console.log(aso -= 2);
console.log(aso *= 5);
console.log(aso /= 5);
console.log(aso %= 5);


// relation Operator
console.log(10 > 11);
console.log(10 < 11);
console.log(10 >= 11);
console.log(10 <= 11);
console.log(10 == 11);
console.log(10 != 11);


// logical Operator

let x = 10;
let y = 40;
let z = 90;
console.log( x >= y && y <= x);
console.log(x == y || y <= z);

// increment decrement
let a = 3;
a++;
++a;
console.log(a);