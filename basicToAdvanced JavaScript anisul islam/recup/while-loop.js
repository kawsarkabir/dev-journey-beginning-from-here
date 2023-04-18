// javascript bangla tutorial 20 : how to use while loop in javascript

var num = 1;
while(num<=5){
    console.log(num);
    num++;
}

// task -6 // sum of all the numbers that are divisible by 3 and 5 from 1-100;
var i = 1;
var sum = 0;
while (i <= 100){
    if( i % 3 == 0 && i % 5 == 0){
        console.log(i);
        sum = sum + i;
    }
    i = i + 1;
}
console.log(sum);
