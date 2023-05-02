const person = {
    name: 'abul', 
    age: 23, 
    contact:{
        phone: '01829924',
        email:'abul@gmail.com'
    },
    education: {
        clgName: 'mym poly institute',
        subject:[
            {name: 'bangla', mark:45},
            {name: 'english', mark:64},
            {name: 'math', mark: 75}
        ]
    }
    
}
console.log(person.name);
console.log(person.age);
console.log(person.contact.email);
console.log(person.contact.phone);
console.log(person.contact);
console.log(person.education);
console.log(person.education.clgName);
console.log(person.education.subject);
console.log(person.education.subject[1].name);