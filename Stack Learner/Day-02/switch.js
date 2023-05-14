// switch case 
let date = new Date()

// 0-Sunday, 1-Monday, 2-Tuesday
let today = date.getDay()
switch(today){
    case 0:
        console.log('Today is Sunday');
        break
    case 1:
        console.log('today is Monday');
        break
    case 2:
        console.log('today is twisday');
        break
    case 3:
        console.log('today is wednesday');
        break
    case 4:
        console.log('today is thusday');
        break
    case 5:
        console.log('today is Friday');
        break
    case 6:
        console.log('today is saturday');
        break
    default:
        console.log('not a valid number');
}