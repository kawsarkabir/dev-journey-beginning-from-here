const students = [
    {name:'mehedy bro', email:'mehedybro@gmail.com', avg: 56, fiftyParcent: true},
    {name:'k2 bro', email:'k2@gmail.com', avg: 45, fiftyParcent: true},
    {name:'kabir bro', email:'kabir@gmail.com', avg: 50, fiftyParcent: false},
    {name:'kawsar', email:'kawsar@gmail.com', avg: 40, fiftyParcent: true},
    {name:'bro', email:'bro@gmail.com', avg: 51, fiftyParcent: false},
    {name:'amirbro', email:'amir@gmail.com', avg: 38, fiftyParcent: true},

];

const result = students.filter(student => student.avg >= 50 && student.fiftyParcent === true);
// console.log(result);
result.map(odom =>{
    const {name, email} = odom;
    console.log(`odomer nam ${name}.`);
})