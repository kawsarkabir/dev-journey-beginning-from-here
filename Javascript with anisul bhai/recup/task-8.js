// Task 8=  highestScores find the arry
function highestScores(scores){
var max = scores[0];
    for(var x = 1; x<scores.length; x++){
        if(max < scores[x]){
            max = scores[x]
        }
    }
    return max;
}
var scores = [ 19, 29, 37, 47, 59, 67];
var maxScore = highestScores(scores);
console.log(maxScore);