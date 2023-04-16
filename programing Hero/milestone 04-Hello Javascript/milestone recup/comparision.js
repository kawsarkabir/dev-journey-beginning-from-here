// comparisiom
console.log(5 > 9);
console.log(5 < 9);
console.log(5 >= 9);
console.log(5 <= 9);

// multiple condition
console.log(5 && 9);
console.log(5 || 9);

// condition in if-else
var tkAse = 20;
var singgaraPrice = 10;
if(tkAse > singgaraPrice){
    console.log('khaiya daiya bachi bhai');
}
else{
    console.log('nareeeeee bhai goribs amir ');
}
// multiple condition 
var carAse = 1;
var mySallary = 70000;
var diplomaPass = true;
if(carAse >=1 && mySallary > 60000 && diplomaPass == true){
    console.log('biye pakka');
}
else{
    console.log('na kicchu hobe na jaw enthe');
}

// || ar example here
var carAse = 0;
var mySallary = 30000;
var diplomaPass = false;
if(carAse >=1 || mySallary > 60000 || diplomaPass == true){
    console.log('biye pakka');
}
else{
    console.log('na kicchu hobe na jaw enthe');
}

//  multi stage condition and nested condition
let marks = 66;
 
if(marks >= 40 && marks <=50){
    console.log('D');
}
else if(marks >= 50 && marks <=60){
    console.log('C');
}
else if(marks >= 60 && marks <=70){
    console.log('B');
}
else if(marks >= 70 && marks <=80){
    console.log('A');
}
else if(marks >= 80 && marks <=90){
    console.log('A+');
}
else if(marks >= 90 && marks <= 100){
    console.log('Golden');
}
else{
    console.log('F');
}