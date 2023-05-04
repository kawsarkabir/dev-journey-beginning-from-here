// find the jamai problem solving 
const boys = [
    {Name: 'kawsar', job:'developer', salary: 190000},
    {Name: 'rohim', job:'sorkari', salary: 40000},
    {Name: 'kabir', job:'besorkari', salary: 35000},
    {Name: 'k2', job:'developer', salary:80000}
]

const selected = boys.filter(boy => boy.job === 'sorkari' && boy.salary >= 20000 || boy.job === 'besorkari' && boy.salary >= 40000);
console.log(selected);

selected.map(vaggoBan =>{
    const {Name} = vaggoBan;
    console.log(Name);
})