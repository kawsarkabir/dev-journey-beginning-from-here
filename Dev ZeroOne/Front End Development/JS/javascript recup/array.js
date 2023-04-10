let arry = ['kawsar', 'kabir', 'kawsar kabir', 'k2'];
// push
let addNewItems = arry.push('dev kawsar');
console.log(arry);
// another way 
arry[arry.length -1] = 'janu';
console.log(arry);
// pop();
let = removeItems = arry.pop();
console.log(arry);
// shift
let shiftFastItems = arry.shift();
console.log(arry);

// unshift
let unshift = arry.unshift('kawsark2');
console.log(arry);

// index of
console.log(arry[1]);

// value set
arry[0] = 'devkawsarkabir';
console.log(arry[0]);

// create arry
const arr = [];
arr[0] = 1;
arr[1] = 40;
console.log(arr.length);
console.log(arr);

// constractor pattern , factory pattern
const a1 = new Array();
console.log(a1, a1.length);
const a2 = new Array(5);
console.log(a2, a2.length);
const a3 = new Array(1, 2, 3, 4, 5);
console.log(a3, a3.length);


// factory pattern 

const x1 = Array();
console.log(x1, x1.length);


// traverse Array Element
let sum = 0;
let arre = [12, 20, 39, 40, 53, ];
/* for(let i = 0; i < arre.length; i++){
    sum += arre[i];

}
console.log(sum); */


// largest numebr find the array

let largestNumber = arre[0];
for(let i = 0; i< arre.length; i++){
    if(arre[i] > largestNumber){
        largestNumber = arre[i];
    }
}
console.log(largestNumber);

// update arrya elements
const numbers = new Array(10);
for(let i = 0; i<numbers; i++){

}
// tic taac somthing
const response = new Array(9);
response.fill(false);
for(let i = 0; i< response.length; i++){
    const rand = Math.floor(Math.random() * 10 + 1);
    response[i] = rand > 5 ? 'x' : '0';
}
console.log(response);

// array is everything 
