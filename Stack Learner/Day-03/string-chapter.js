// ============ string methods =========

const a = 'my name is '
const b = 'kawsar kabir'
let ab = a.concat(b)

// index kothai ase seta jante 
console.log(ab.charAt())

// startWith hoise ki na 
console.log(ab.startsWith('k'));

// endWith
console.log(ab.endsWith('r'));

//  upperCAse && lowerCAse
console.log(ab.toUpperCase());

// lowerCASe
console.log(ab.toLowerCase());

// space remve
console.log(            'space remove'.trim());

// split
console.log(ab.split(''));


//  ============ string length =========

let str = 'kawsar kabir'
let length = 0
while(true){
    if(str.charAt(length) == ''){
        break
    }else{
        length++
    }
}
console.log(length);



//  ========= array traversing =============
const arr = [1, 23, 76, 89, 90, 100]
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

//  sumation of array 
let sum = 0;
for(let i = 0; i< arr.length; i++){
    sum += arr[i]
}
console.log(sum);  

//  even numer find the array
for(let even = 0; even<arr.length; even++){
    if(arr[even] % 2 === 0){
        console.log(even);
    }
}



for(let odd = 0; odd< arr.length; odd++){
    if(arr[odd] % 2 === 1){
        console.log(odd);
    }
}


//  ========== array insert, remove, add, 
// arr last elements added
console.log(arr);
console.log(arr.push(900));
console.log(arr);

// remove last elemets
console.log(arr.pop());
console.log(arr);

// fasl elements remmove
console.log(arr.shift());
console.log(arr);

// fst elements addded
console.log(arr.unshift(2767));
console.log(arr);

const string = 'my name is kawsar kabir'
console.log(string.slice(10).trim());
