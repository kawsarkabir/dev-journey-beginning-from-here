const randomUser =() =>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => displayUserInfo(data.results))
}
randomUser()
const displayUserInfo = data =>{
    const userContainer = document.getElementById('user-container');
    for(const user of data){
        console.log(user.location);
        
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
        <h1> user Name: ${user.name} </h1>
        `
        userContainer.appendChild(userDiv);
    }
}