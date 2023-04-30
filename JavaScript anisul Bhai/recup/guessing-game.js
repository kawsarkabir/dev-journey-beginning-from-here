/* 
1. guess a number form 1 to 5;
2. generate a random number bwtween 1 to  5;
3. if the guess number matches random number, then show msg win or lost;
4. run the game on 5 times;
5 show th e numer of lost or win 
*/
var guessNmuber= parseInt(prompt('Guess The Number ?'));
var randomNumebr =Math.floor(Math.random()* 5) + 1;
if(guessNmuber == randomNumebr){
    console.log('yes you are win');
}else{
    console.log('opss, you are wrong ' + 'random number was ' + randomNumebr);
}
console.log(guessNmuber);
