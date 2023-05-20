// conditon  in javascript 
/* 
if
else
else if
*/

//  if conditon 

const mobilePrice1 = 90000
const myTk1 = 25000
if(myTk1 > mobilePrice1){
    console.log('yoyo yoyo ! i will buy a iPhone');
}


// else conditon added 
const mobilePrice2 = 90000
const myTk2 = 25000
if(myTk2 > mobilePrice2){
    console.log('yoyo yoyo ! i will buy a iPhone');
}else{
    console.log('No! i am Poor');
}


// else if
const mobilePrice3 = 90000
const myTk3 = 25000
const ipadPrice = 80000
if(myTk3 > mobilePrice3){
    console.log('yoyo yoyo ! i will buy a iPhone');
}else if(mobilePrice3 >ipadPrice){
    console.log('na thak ami ipad e kinum');
}
else{
    console.log('No! i am Poor');
}



//  find the odd && even number 
const number100 = 90
if(number100%2 === 0){
    console.log('its even number ' + number100);
}else{
    console.log('its odd number ' + number100);
}



// switch statment  jevabe likhe 
let color = 'red'
switch(color){
    case 'blue':
        console.log('blue color')
        break;
    case 'red':
        console.log('red bondhu')
        break;
    case 'green':
        console.log('green bondhu');
        break;
    default:
        console.log('black');
        break
}

 
// And Or Shorthand
let name = ''
let fullName = name||'kawsar kabir'
console.log(fullName);


let isOk = true
isOk && console.log('ok');
