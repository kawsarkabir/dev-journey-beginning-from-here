//  without .length
let str = 'some string'
let length = 0
while(true){
    if(str.charAt(length) == ''){
        break
    }else{
        length++
    }
}
console.log(length)


