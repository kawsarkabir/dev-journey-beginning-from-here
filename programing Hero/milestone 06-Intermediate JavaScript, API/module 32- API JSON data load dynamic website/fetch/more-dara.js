/* function loadDATA2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
} */

/* function usersData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
} */

// another way to laod data 

function displayData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData2(data))
}

function displayData2(data){
    console.log(data);
}