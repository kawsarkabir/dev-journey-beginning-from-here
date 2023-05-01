//1. var let const 
const numbers = [1, 23, 56, 89, 90, 88];
let salary = 450;
salary = 455;

// 2, default parametres
function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

// template string 
const elementHTML = `
<div>
     <h3>Name: </h3>
     <p>Address: </p>
     <p>Salary: ${calculateSalary(1000, 0, 0)} </p>
     <p>Others: ${ numbers[2]}</p>
</div>
`;

//4. arrow func
const doubleIt = x => x*199;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;


// 5. spread operator 
const age = [ 1,2 , 34, 5, 6,6 ,7,8];
const newAges = [... age, 890];
console.log(newAges);