// object litreral difine ob
const ob = {

}
ob.fName = 'hm namyen';
ob.lastName = 'segufa'
console.log(ob);
console.log(ob.lastName);

// easy way
const person2 = {
    name: 'k2',
    email: 'devkawsarkabir@gmail.com'
}
person2.id = '01882351026'
console.log(person2.name);
console.log(person2.email);
console.log(person2.id);
delete person2.id;
console.log(person2);

// arrya of object

const people = [ 
    {
        name: 'kawsar',
        email:'kawsar@gmail.com'
    },
    {
        name:'kabir',
        email:'kabir@gmail.com'
    }
];
console.log(people[0].name);
for(let p of people){
    console.log(`${p.name} (${p.email})`);
}
