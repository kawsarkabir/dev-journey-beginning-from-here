// step 1: add click event handlers in submits button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address inside the email input field
    // always remenber to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get the password inside the email input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // DANGER: DO NOT varify password email on the client side
    // step 4: varify password email 
    if(email == 'kawsarkabir@gmail.com' && password == 'kawsarkabir'){
        console.log('its valid user');
    }
    else{
        console.log('it is not valid');
    }
     
    


})