function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=>displayUsers(data))
}
function displayUsers(datas){
    for(const data of datas){
        const userContainer = document.getElementById('users-container');
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <h1>Id:${data.id}</h1>
        <h2>Name: ${data.name}</h2>
        <h3>User name: ${data.username}</h3>
        <h3>Email: ${data.email}</h3>
        <h4>Adress: ${data.address.city},${data.address.street} - ${data.address.zipcode}</h4>
        `
        userContainer.appendChild(userDiv);
    }
}
loadUsers()