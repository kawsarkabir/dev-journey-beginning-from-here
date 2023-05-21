 function test(a, b, c){
    console.log(JSON.stringify(arguments));
    // console.log(typeof a);
}
test()

// arguments pass without perameter
function addALl(){
    let sum = 0;
    for(let i = 0; i<arguments.length; i++){
        sum +=arguments[i]
    }
    console.log(sum);
}
addALl(11, 2,7)





