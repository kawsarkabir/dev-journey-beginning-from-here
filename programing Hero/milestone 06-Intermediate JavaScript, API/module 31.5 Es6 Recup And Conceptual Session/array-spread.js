const num1 = [1, 2,3 , 5, 6, 6,69];
console.log(Math.min(...num1));


const [a, b, ...rest] = num1;
console.log(a);
console.log(b);
console.log(rest);
console.log(a, b, rest);

// 
const x = [1, 2, 3, 4];
const y = x;
x.push(77);
console.log( 'x: ', x
);
console.log( 'y: ', y);


const c = [1, 2, 4];
const d = [...c];
c.push(99);
d.push(10);
console.log(c);
console.log(d);