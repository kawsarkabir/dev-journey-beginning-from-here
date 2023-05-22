// CallBack Function in JavaScripit 
function sample(a, b, cb){
    let c = a + b
    let d = a - b
    let result =cb(c, d)
    return result
}
function sum(a, b){
    return a + b
}

let result = (sample(5, 8, sum))
console.log(result);