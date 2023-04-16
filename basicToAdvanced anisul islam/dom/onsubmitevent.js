// find the element form 
const form = document.querySelector('form');
const name = form.querySelector('#name');
const email = form.querySelector('#email');
const password = form.querySelector('#passworld');
form.addEventListener('submit', formHandler);

function formHandler(e){
    e.preventDefault();

    const userInfo = {
        name: name.value,
        email: email.value,
        password: password.value,
      };
    
      console.log(userInfo);
      name.value = "";
      email.value = "";
      password.value = "";
    }