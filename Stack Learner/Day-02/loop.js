//  There are Mainly Three Types of Loop 

/* 
1. For Loop
2. While Loop
3. Do While Loop
*/
 
// For Looooooooop
for(let i = 1; i<=10; i++){
    // console.log('kawsar kabir ' + i);
}

for(let i = 1; i<=10; i++){
    // console.log('kawsar kabir ' + i);
}


//  sumation 
let sum = 0;
for(let i = 1; i <=10; i++){
    // console.log(sum + ' + ' + i + ' = ' + (sum + i));
    sum+= i
}

// task 1-100 event number ar sumation
let sum1  = 0;
for(let i = 0; i<=10; i+=2){
    // console.log(sum1 + ' + ' + i + ' = ' + (sum1 + i));
    sum1+=i
}


// ========= while Looppppppppppppppp

let i = 0
while(i <= 10){
    // console.log(i, 'kawsar kabir');
    i++
}



let isRunning = true
while(isRunning){
    let rand = Math.floor(Math.random()*10 + 1)
    if (rand === 9){
        console.log('winner winner chicken Dinner');
        isRunning = false
    }else{
        console.log('You have got ' + rand);
    }
}



// ============ do while loppppppppppp
let isOk = false;
while(isOk){
    console.log('I am ok');
}

do{
console.log('I am ok');
}while(isOk)