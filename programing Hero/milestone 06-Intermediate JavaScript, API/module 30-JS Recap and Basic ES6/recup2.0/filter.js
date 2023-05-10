// filteer a condition manle setake se diye dibe naile nai 
const numbers = [15, 34, 23, 95, 89, 100];
const bigNums = numbers.filter(number =>number > 90);
const tiny = numbers.filter(x => x < 40);
const even = numbers.filter(y => y % 2 === 0);


const products = [
    {id: 1, name:'laptop', price:8400},
    {id:2, name:'computer', price: 90000},
    {id:3, name:'mouse', price: 3300}
];
const expensive = products.filter(p =>p.price < 5000)
console.log(expensive);


// find ar kaz holo conditaion jodi true hoi tahole se fast jake pabe tarei dore felbe r pore kaz korbe na find ar kaz ses
const numbers2 = [1, 2, 3,4, 5, 5, 2, 65, 26,6, ];
const even2 = numbers2.find( e => e % 2 === 0);
console.log(even2);