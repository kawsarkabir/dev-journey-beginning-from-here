//  array 

// var friends = [ 4, 4, 8, 9, 0, 10, 48];
// .length diye array ar sob element pawya jai
// friends = friends.length
// console.log(friends);

// indexOf 
// console.log(friends[4]);
// set the index value
// friends[0] = 100;
// console.log(friends);
// friends = friends.indexOf(48);
// console.log(friends);


/* //  array.pop();
friends.pop();
console.log(friends);

//  array.push();

friends.push(389);
console.log(friends); */

/* 
//  comparision 
//  akhane 6 boro
console.log( 5 < 6);
// akahne 5 boro
console.log(5 > 6);
// == soman soman ki na
console.log( 5 == 6);
// osoman ki na
console.log( 5 != 6);
// alada kina
console.log( 6 != 6);
console.log( 5 <= 6); */

// multiple condition 
//  && , ||

// money1 > money2 && result1 > result2 || heigth1 > height2


/* var iphonePrice = 300;
var money = 990;
if (money > iphonePrice){
    console.log('i phone kinum');
}
 */

/* var chickenPrice = 800;
var myMoney = 50;
if (myMoney > chickenPrice){
    console.log('khabo')
}
else{
    console.log('khamu na')
} */


// multiple condition && , || 
/* 
var car = 2;
var result = true;
var salary = 80000;
if( car > 1 && result == true && salary > 50000){
    console.log('tahole tomar biye hobe')

}
else{
    console.log('kopale biye nai');
}
 */



//  while loop 

/* var dimGiven = 0;
while(dimGiven <= 10){
    console.log('vai ami dim behsi khai,' + dimGiven);
    dimGiven++;
} */


//   odd number in while loop 

/* var oddNumber = 1;
while(oddNumber <= 10){
    console.log(oddNumber);
    oddNumber = oddNumber + 2;
} */

// even number in while loop 
/* var evenNumber = 0;
while (evenNumber <= 10){
    console.log(evenNumber);
    evenNumber = evenNumber + 2;    
} */


// foop loop 
/* for(var roastGiven = 0; roastGiven <= 10; roastGiven++){
    console.log(roastGiven);
} */


// array every each element in output
/* var friends = [ 1, 2, 3,4, 5, 6 ,7, 8, 9, 10];
for(var i = 0; i < friends.length; i++){
    var friend = friends[i]
    console.log(friend);
} */


/* var items = ['bottol', 'sunglass', 'mouse', 'pen'];
for(var i = 0; i< items.length; i++){
    var item = items[i];
    console.log(item);
}
 */

/* var items = ['bottol', 'sunglass', 'mouse', 'pen'];
for(var i = 0; i< items.length; i++){
    var item = items[i];
    if(item == 'mouse'){
        break;
    }
    console.log(item);

}


var friends = [ 31, 20, 30,47, 59, 69 ,70, 88, 79, 10];
for(var i = 0; i < friends.length; i++){
    var friend = friends[i];
    if(friend > 60){
        continue;
    }
    console.log(friend);
} 
 */

// looop reverse in way
/* var nums = 10;
while (nums >= 1){
    console.log(nums);
    nums--;

} */

//  foor loop in reversed way
 /* for(var i = 10; i >= 1; i--){
    console.log(i);
 } */

//  pratice problem
var num1 = 83;
var num2 = 99;
var num3 = 45;
if(num1 > num2){
    if(num1> num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2 > num3){
        console.log(num2);
    }
}


//  