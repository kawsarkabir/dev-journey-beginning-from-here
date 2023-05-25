// template string
let s = `   1st line of code
2nd line of code  
3rd line of code`

let age = 23
let name = 'kawsar kabir'
// boring system 
console.log('my name is ' + name + ' and i am ' + age + ' years old');

// string template 
console.log(`my name is ${name} and i am ${age} years old.That's way i am ${age<=18? 'not ': ''}adult.`);

// new methods 
console.log(s.padStart(10));

console.log(s.padEnd(90));

console.log(s.repeat(89));
