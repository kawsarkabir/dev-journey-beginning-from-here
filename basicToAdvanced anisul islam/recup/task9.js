// javascript bangla tutorial 30 : two dimensional array | Task 9

function highestScorer(playerInfo){
    var highestScorer = playerInfo[0][0];
    var highestScore = playerInfo[0][1];

    for(var x = 1; x < playerInfo.length; x++){
        if(highestScore < playerInfo[x][1]){
            highestScore = playerInfo[x][1];
        }
    }
    return highestScorer;
}
var playerInfo = [
    ['k2', 100],
    ['kawsar', 90],
    ['kabir', 98],
    ['ahmed', 80]
]
console.log( highestScorer(playerInfo));