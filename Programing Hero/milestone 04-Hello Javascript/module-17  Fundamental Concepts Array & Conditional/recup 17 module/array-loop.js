/* for(var i = 0; i < 10; i++){
    console.log(i);
} */


// terget sidplay every element of an array

/* var numbers = [1, 3, 5, 8, 89, 90, 17, 60];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
} */

// char array
/* var items = ['bottle', 'mouse', 'sunglass', 'pen', 'book'];
for(var i = 0;  i < items.length; i++){
    var item = items[i];
    console.log(item);
    // break
    if(i >= 3){
        break;
    }
}
 */


// break example
var rickGiven = ['k2', 'janu', 'manu', 'alu'];
for(var i = 0; i < rickGiven.length; i++){
    var rice = rickGiven[i];
    if(rice == 'janu'){
        break;
    }
    console.log(rice);

}
