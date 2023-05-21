/* 
js 2 type of data type 
1. primituive data type 
   * number
   * string
   * boolean
   * null
   * undefined
2. non primituve data type
   *object
   *arrray
   *function 
*/

// ****** number data type ******
const num1 = 10;
const num2 = 10.8990

// number to parseInt
console.log(parseInt(num1));
console.log(parseFloat(num2));
console.log(parseInt(num1));
let num2String = parseFloat(num2).toFixed(2)
console.log(parseFloat(num2String));


//  ****** string ********
let str1 = 'this is a str1'
console.log(str1);

let str2 = `this is str2 using backtik`
console.log(str2);


//  ***** Boloean ******
const isHappy = true;
const isSmileAlways = false;

// boolean constructor
const b1 = Boolean(true)
const b2 = Boolean(false)


// null && undefined 
let abc
let abr = null



// Type Convertion 
let s1 = '10'
let s2 = 10
console.log(s1*s2);
// convert to number
console.log(parseInt(s1 + s2));

// numer to sting
console.log(s2.toString());

// truthy vlaue & falsy vlaue
// " ", 0, null, undefined, NaN {false value}

console.log(Boolean(''));
console.log(Boolean('this is '));

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(289));

let x = true
console.log(x.toString());



//  octak number && hexadecimel numebr 
let hex = 0xff  // hex decimel Base 16
console.log(hex);

let oct = 0756  // oct base 8
console.log(oct);