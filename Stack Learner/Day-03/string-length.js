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


// ============== recup ==============
let text = 'kawsar kabir'
let length2 = 0;
while(true){
    if(text.charAt(length2) == ''){
        break
    }else{
        length2++
    }
}
console.log(length2);