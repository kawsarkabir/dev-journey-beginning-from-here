// arrow function and default parameters
/* function run(x){
    console.log('Hello world');
    return x * 2;
}// console.log(run(10))
const add = x => x * 2;  */
// multiline arrow functio

/* const add1 = (x, y) =>{
  return  x + y;
}
console.log(add1(10, 20)); */

// defauilt paremeter 
const add1 = (x, y = 0) =>{
    return  x + y;
  }
//   console.log(add1(10));


//  forEach
const numbers = [1,2, 3, 4, 5, 66, 77, ];
numbers.forEach(i => console.log(i)); // forEach  return korbe na

numbers.map(x =>console.log(x)) // map return korbe


// forEach vs map
const a = numbers.map(x => x * 2);
const b = numbers.forEach(y => y * 2);
console.log(' A', a); // retun korbe
console.log( 'B', b); // return korbe na

