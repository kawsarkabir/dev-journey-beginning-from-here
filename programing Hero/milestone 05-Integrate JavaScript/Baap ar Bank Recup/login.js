// step 1: add click event handler in submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address && password in input field
    const userEmail = document.getElementById('input-field');
    const email = userEmail.value;

    const passwordfield = document.getElementById('password');
    const password = passwordfield.value;

    // DO NOT VERIFY EMAIL PASS ON THE CLIENT SIDE
    // step: 4 verify email pass

    if(email === 'admin@gmail.com' && password === 'admin'){
        window.location.href ='bank.html';
    }
    else{
        alert('Invalid user')
    }
})