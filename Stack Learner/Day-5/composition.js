// function composition 
/* 
1st function ar input akare jodi 2nd function ar output diya jai taholei 
sei function ke amra funciton composition bolte parbo 
*/

function print(int){
    console.log(int);
}

function multiP(n){
    return n * 5
}

function add(x, y){
    return x + y
}

print(multiP(add(3, 5)))
