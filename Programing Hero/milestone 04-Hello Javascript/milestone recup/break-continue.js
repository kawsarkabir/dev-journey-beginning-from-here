for(var i = 0; i<=20; i++){
    console.log(i);
    if(i >= 10){
        break;
    }
}

// every element chek in break 
var friends = ['abul', 'kabul', 'jabul', 'atul', 'matul'];
for(var i = 0; i< friends.length; i++){
    var friend = friends[i]
    if(i=='kabul'){
        break;
    }
    console.log(friend);
}