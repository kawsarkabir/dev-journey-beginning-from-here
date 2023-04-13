// comparisom, condition 
console.log(5 > 6);
console.log(5 < 6);
console.log(5 == 6);
console.log(5 >= 6);
console.log(5 <= 6);
console.log(5===5);
console.log(3 != 4);
console.log(6 != 6);
// multiple condition && , ||

// some exp of conditional if, if-else, else-if
let phonePrice = 30098;
let myBudget = 2700000;
if(phonePrice < myBudget){
    console.log('i eat danish');
};


// if-else 
if(phonePrice > myBudget){
    console.log('i will buy nokia');
}
else{
    console.log('suddenly i found many more dollor');
}


// if, if-else, else-if
let myMoney = 2000;
let shirt = 450;
let pant = 800;
let panjabi = 1000;
let clock = 200;
if(shirt > myBudget){
    console.log('i will buy t-shirt');
}
else if(myMoney > panjabi){
    console.log(' i will buy a awesome panjabi');
}
else if( panjabi > shirt){
    console.log('i will buy shirt cz panjabir price behsi');
}
else{
    console.log('duru ami goribs');
}


// multiple condition && , ||

const isCar = 0;
const isGaduated = true;
const salary = 40000;
const isSingle = true;
if(isCar == 1 && isGaduated == true && salary > 80000 && isSingle == true){
    console.log('kobul kobul kobul');
}
else{
    console.log('tor kopale biye nai');
}



// || exp 
if(isCar == 1 && isGaduated == true || salary > 80000 || isSingle == true){
    console.log('kobul kobul kobul');
}
else{
    console.log('tor kopale biye nai');
}



// multi stage condition here 
 let math = true;
 let geometry = true;
 let straighLine = false;
 if(math == true){
    if(geometry == true){
        if(straighLine == true){
            console.log('straighLine Teacher');
        }
        else{
            console.log('baka pothe cholba na');
        }
    }
    else{
        console.log('tumake diye math hobena');
    }
}
else{
    console.log('tumi hablu');
}

// sumary 
var destinations = [ 'sajek', 'coxsbazar', 'nepal' , 'bali']
console.log(destinations);
// array length
console.log(destinations.length);

// find the index
const index = destinations[2];
console.log(index);

// element diye index ar possition find
const possitionIndex = destinations.indexOf('coxsbazar');
console.log(possitionIndex);

// set the value
let setValue = destinations[2] = 'sylhet';
console.log(setValue);
console.log(destinations);

// added fast elements
destinations.unshift('barabil');
console.log(destinations);

// remove fasr elements
destinations.shift();
console.log(destinations);

// last element addeded

destinations.push('shahzadpur');
console.log(destinations);

// remove last elements
destinations.pop();
console.log(destinations);

