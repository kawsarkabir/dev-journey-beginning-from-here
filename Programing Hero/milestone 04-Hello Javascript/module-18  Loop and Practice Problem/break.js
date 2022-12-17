//   18-6 (advanced) while and for loop break and continue



// recup
// var friends =['ami ', 'tumi', 'se'];
// for(var i = 0; i< friends.length; i++){
//     var friend = friends[i];
//     console.log(friend);
// }

// for (var i = 0; i <= 20; i++){
//     console.log(i);
//     if(i>16){
//         break;
//     }
// }

// while loop in break 

// var roastedGiven = ['kawsar', 'bawsar', 'lawsar'];
var roastedGiven = 0;
while(roastedGiven < 10){
    console.log('vai amare den vai');
    roastedGiven++;
    
    if(roastedGiven> 7){
        break;
    }
}

//  another 
var items = ['bottle', 'mouse', 'sunglass', 'notebook', 'pen'];
for(var i = 0; i < items.length ; i++){
    var item = items[i];
    
    console.log(item);
}

