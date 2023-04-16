function add(frist, second = 0){
    console.log(frist, second);
    const total = frist + second;
    return total;
}
const result = add(10)
console.log(result);

function fulName(frist, last = 'chowdury'){
    const name = frist + ' ' + last;
    return name
}
const name = fulName('k2')
console.log(name);