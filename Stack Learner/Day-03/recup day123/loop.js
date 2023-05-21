// introduction to loop
let name = 'kawsar kabir'
for(let i = 1; i<=100; i++){
    // console.log(i, ' kawsar kabir');
}



// find the odd numebr in 1-100
for(let i = 1; i<=100; i+=2){
    // console.log(i, 'odd number');
}

// odd numer sum 
let sum1 = 0
for(let i = 1; i<= 100; i+=2){
    sum1 = sum1 + i
    console.log(sum1,'sum 01');
}

// find the even number 
for(let i = 2; i<=100; i+=2){
    // console.log(i);
}


// sum even number 1-100

let sum2 = 0
for(let i = 0; i<=100; i+=2){
    sum2 = sum2 + i
    console.log(sum2);
}



//  for looop reserved 
for(let i = 10; i>=0; i--){
    console.log(i);
}

let x = 10
while (x > 19) {
    console.log('hello world');
    x++
}




// nested loop 
for(let i = 1; i<=5; i++){
    let result = ''
    for(j = 1; j<=i; j++){
        result += j + ' '
    }
    console.log(result);
}


//  squre
for(let i = 1; i<=5; i++){
    let result = ''
    for(j = 1; j<=5; j++){
        result += j + ' '
    }
    console.log(result);
}




// *****
for(let i = 1; i<=5; i++){
    let result = ''
    for(j = 1; j<=i; j++){
        result +=' *'
    }
    console.log(result);
}

for(let i = 1; i<=5; i++){
    let result = ''
    for(j = 1; j<=5; j++){
        result +=' *'
    }
    console.log(result);
}




for(let i = 1; i<=5; i++){
    let result = ''
    for(let j = 1; j<=i; j++){
        result += j + ' '
    }
    console.log(result);
}