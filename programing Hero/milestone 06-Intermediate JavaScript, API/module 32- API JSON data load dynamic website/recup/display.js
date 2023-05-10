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

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>displayPost(data))
}
function displayPost(data){
    const postContainer = document.getElementById('post-container');
    for(const postItem of data){
        console.log(postItem);
        const postDiv = document.createElement('div');
        postDiv.classList.add('user')
        postDiv.innerHTML = `
        <h1>PostId: ${postItem.id}</h1>
        <h3>${postItem.title}</h3>
        <p>${postItem.body}</p>
        `
        postContainer.appendChild(postDiv)
    }
}


loadPost()