let str1 = 'it\'s me! kawsar kabir'
console.log(str1);


//  string comparison 
let a = 'abc'
let b = 'bcd'
// console.log(a === b);
console.log(a>b);
 
// string methods 
// .concat
let fastName = 'I am'
let lastName = ' kawsar kabir'
let c = (fastName.concat(lastName));

// substring 
let d = c.substring(5)
console.log(d);

// charAt
console.log(c.charAt());

// upperCase && lowerCase
console.log(c.toUpperCase());
console.log(c.toLowerCase());

// remove space 
console.log('      space remove'.trim());


// split 
console.log(c.split( ''));



//  string length 
let str = 'some string'
let length = 0
while(true){
    if(str.charAt(length) == ''){
        break
    }else{
        length++
    }
}
console.log(length);



//  length 
let string = 'kawsarkabir'
let length1 = 0
while(true){
    if(string.charAt(length1)== ''){
        break
    }else{
        length1++
    }
}
console.log(length1);