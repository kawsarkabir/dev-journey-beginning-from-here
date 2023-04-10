// gujamil of arry
const arr = [10, true, getTen,{ten:10}, [10, 5]];
console.log(arr);

function getTen(){
    return 10;
}

// array of object 

const favChannel = [
    {name: 'Stack Learner', url:'https://www.youtube.com/@StackLearner'},
    {name: 'JS Bangladesh', url: 'https://www.youtube.com/@StackLearner'},
    {name: 'sumit saha', url: 'https://www.youtube.com/@StackLearner'}
];

// array of function 
const a = 20, 
      b = 10;
const sum = (a, b) => a + b;
const sub =(a, b) => a - b;
const multipy = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const func = [sum, sub, multipy, div, mod]
for(let i = 0; i< func.length; i++){
    const result = func[i](a, b);
    console.log(`[${func[i].name}] result = ${result}`);
}