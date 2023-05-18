// muulti dimention array
const arr = [
    [78, 71, 80, 90], 
    [80, 89, 20, 70],
    [78, 90, 34, 69]
]
console.log(arr);

//  multi dimention array teversing 
for (let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr[i].length; j++){
        console.log(arr[i][j]);
    }
}

// ======== practice nije nije with string
const friends = [
    ['anamul', 'nahin', 'mubarok', 'kawsar'],
    ['ami', 'tumi', 'se'],
    ['I', 'Love', 'Bangladesh']
]
console.log(friends);
for(let k = 0; k<friends.length; k++){
    for(let m = 0; m<friends[k].length; m++){
        console.log(friends[k][m]);
    }
}
