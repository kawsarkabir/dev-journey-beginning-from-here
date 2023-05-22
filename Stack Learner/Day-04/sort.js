// sort methods in JavaScript 
let arr = [12, -78, 90, -20, 38, 90, 19, 40]
console.log(arr.sort())

let persons = [
    {
        name: 'A', age:24
    },
    {
        name:'B', age: 20
    }, 
    {
        name: 'C', age:19
    }
]
console.log(persons.sort());

// 
arr.sort(function(a, b){
    if(a>b){
        return 1
    }else if(a < b){
        return -1
    }else{
        return 0
    }
})
console.log(arr);

persons.sort(function(a, b){
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        0
    }
})
console.log(persons);