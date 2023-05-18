const arr = [12, 34, 89, 23, 89, 90, 38, 300]
const find = 300
let isFound = false

for(let i = 0; i< arr.length; i++){
    if(arr[i] === find){
        // console.log('data find ' + i);
        isFound = true
        break;
    }
}
if(!isFound){
    // console.log('dat not found');
}


//  === practice again 
let arr2 = ['amir', 'jamir', 'tamir', 'kamir', 'kawsar', 'kabir']
let dataFind = 'kawsar'
let ispaichi = false

for(let i = 0; i<arr2.length; i++){
    if(arr2[i] === dataFind){
        console.log('Heloo bhia data paichi '+i);
        ispaichi = true
        break
    }
}
if(!ispaichi){
    console.log('kabir bhai ja chacchilen ta pai nai');
}