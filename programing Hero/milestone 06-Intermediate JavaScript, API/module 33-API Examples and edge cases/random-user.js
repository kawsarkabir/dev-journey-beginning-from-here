const randomUser =()=>{
    fetch('https://randomuser.me/api/?results=10')
    .then(ress => ress.json())
    .then(data => displayUsers(data.results));
}
randomUser();
const displayUsers = data =>{
    const userContainer = document.getElementById('user-container');

    for(const user of data){
        console.log(user);
        
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
        <h1>user name: ${user.email} </h1>
        <p>user info</p>
        `;
        userContainer.appendChild(userDiv);
    }
}
