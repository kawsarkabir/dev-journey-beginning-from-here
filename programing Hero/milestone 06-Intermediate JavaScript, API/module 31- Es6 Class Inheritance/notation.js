const student = {
    name:'kawsar', 
    age:18,
    class:'diploma',
    marks:{
        math:78, 
        eng:90,
        cheimistry: 88
    }
}
// const marks = student.marks;
//=== dot notation .
const marks = student.marks.eng;
console.log(marks);
// ===*** braket notation 
const cheimistry = student['marks']['cheimistry'];
console.log(cheimistry);