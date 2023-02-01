// #07 JavaScript Bangla Tutorial | JavaScript let Keyword

/*
 let দিয়ে যদি আমরা ভারিয়াবল ডিক্লারেশন করি তাহলে আমারা জাস্ট এক বারই সেটা ব্যবহার করতে পারবো।
 */
/* let x = 10;
let y = 30;
console.log(x + y);
 */
// block scope 
/* 
2015 সালের আগে এই ২ ধরনের scop ছিলো
 javascript  ২ ধরনের scop আছে সেটা হলো 
 1.Globar Scope = এটা ফাংশন এর বাইরে
 2.Fuction Scope =  এটা ফাংশন এর ভিতরে

 variable declared with var keyword can not have block scop
 
*/

/* var n = 1 + parseInt('1');
n = n-1;
console.log(n); */

/* var n = 10;
var m = '11'
console.log(m + n); */
/* var now = new Date();
var daysOfYear = [2023];
for (var d = new Date(2012, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
    daysOfYear.push(new Date(d));
} */

// const today = new Date(); const day = today. getDay(); const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]; console. log(`Today is : ${daylist[day]}. `); let hour = today.













/* condition 1 
jodi pass kori = cycle dibe 
jodi fail kori tk dibo na.
 */


var isPassKori = false;
var getCertificet = true;
var getGolden = true;
if(isPassKori == true){
    console.log('cyle kine dibe amake');
}
else if( isPassKori == true){
    console.log('tomake r tk dibo na jaw');
}
else if ( getGolden == true && getCertificet == true){
    console.log('tumi vlo korecho tai family tour dibo');
}
