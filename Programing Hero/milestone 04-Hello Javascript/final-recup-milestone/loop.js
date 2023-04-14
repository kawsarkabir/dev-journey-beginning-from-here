// while loop
let count =1;
while(count <= 5){
    console.log(count);
    count++;
}

// find the odd number in 1-100;
var num = 1;
while(num < 100){
    console.log(num);
    num += 2;
}


// find the even number 1-100
let countNumber = 0;
while(countNumber < 100){
    console.log(countNumber);
    countNumber += 2;
}

// for loop
for(cN = 50; cN < 100; cN++){
    console.log(cN);
}

// odd number using for loop 
for(odd =1; odd <= 20; odd+= 2){
    console.log(odd);
}


// even number using for
for(even = 0; even <= 50; even += 2){
    console.log(even);
}


// sumation 1-10;

sum = 0;
for(let i = 1; i <= 10; i++){
    sum = sum + i;
    console.log(sum);
}


// terget: display every element of the array
let number = [ 34, 38, 89, 90, 35];
for(let i = 0; i< number.length; i++){
    let numbers = number[i];
    console.log(numbers);
}

// break && constinue 
for(let i = 1; i<=5; i++){
    console.log(i);
    if(i== 2){
        break;
    }
}


// break
let friends = ['anamul', 'nahin', 'mubarok'];
for(let i = 0; i < friends.length; i++){
    let friend = friends[i];
    if(friend == 'mubarok'){
        break;
    }console.log(friend);
}


// continue 
let buddys = ['anamul', 'nahin', 'mubarok' , 'k2', 'kabir'];
for(let i = 0; i < buddys.length; i++){
    let friend = buddys[i];
    if(friend == 'mubarok'){
        continue;
    }console.log(friend);
}


// continue
let ages = [1, 2,3, 60, 89, 45, 6, 7, 23, 90];
for(let i = 0; i < ages.length; i++){
    let age = ages[i];
    if(age <= 50){
        continue;
    }
    console.log(age);
}
