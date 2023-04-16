// (advanced) Multi stage condition and nested conditions
var money = 100;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if (danishPrice < money){
    console.log('danish khabo');
}
else if (toastBiscuit > butterBread){
    console.log('toast khabo na');
}
else if (butterBread < money){
    console.log('butterbread khabo');
}
else{
    console.log('ajke amr khida nai');
}
