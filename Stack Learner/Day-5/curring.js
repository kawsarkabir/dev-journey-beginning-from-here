// curring in JavaScipt 
function add(a, b, c){
    return a + b + c
}


function curring(a){
    return function(b){
        return function (c){
            return a + b + c
        }
    }
}
let result = curring(5)(10)(15)
console.log(result);

