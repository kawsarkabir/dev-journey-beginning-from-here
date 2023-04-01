// how to create and use object
 var stud1 ={
    name : 'kawsar kabir',
    age : 19,
    cgpa: 3.92,
    lang: 'eng, bang'
 }
 console.log(stud1.age);
//  how to create a template object additing a constructor 
// adding function inside a construction 

function student(name, age, cgpa, lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang =lang;

    this.display = function(){
        console.log(this.name);  
    }
}
var student1 = new student ('kawsar kabir', 
18, 4.00, ['eng','bangla']);
student1.display();