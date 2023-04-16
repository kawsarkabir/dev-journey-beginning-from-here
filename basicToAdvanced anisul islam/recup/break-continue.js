// javascript bangla tutorial 22 : how to use break and continue
// break example
for (var i = 1; i<=100; i++){
    if(i == 6){
        break;
    }
    // console.log(i);
}

// continue example 
for (var i = 1; i<=100; i++){
    if(i == 6){
        continue;
    }
    // console.log(i);
}

// find the odd number in continue
for (var e = 1; e<= 100; e++){
    if(e % 2 == 0){
        continue;
    }
    console.log(e);
}
