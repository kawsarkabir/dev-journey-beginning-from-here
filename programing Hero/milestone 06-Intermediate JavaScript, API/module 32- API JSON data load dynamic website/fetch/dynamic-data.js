// 32-5 Dynamically display loaded data on your website

function dynamicDATA(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser1(data))
}

function displayUser1(data){
     const ul = document.getElementById('user-list');
     for(const user of data){
        const li = document.createElement('li');
        li.innerText = user.name
        ul.appendChild(li)
        }
}