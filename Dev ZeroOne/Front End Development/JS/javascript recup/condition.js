const yourAge = 30;
const yourBrotherAge = 30;
if(yourAge > yourBrotherAge){
    console.log('you are elder');
}
else{
    console.log('your brother is elder');
}

// else if

if(yourAge > yourBrotherAge){
    console.log('you are elder');
}else if(yourBrotherAge > yourAge){
    console.log('your borther is elder');
}
else{
    console.log('you both are same');
}