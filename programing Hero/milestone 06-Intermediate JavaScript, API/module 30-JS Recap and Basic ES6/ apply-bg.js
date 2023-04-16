document.getElementById('apply-bg').addEventListener('click' , function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'purple'
    }
});

document.getElementById('center a jaw').addEventListener('click', function(){
    const centerAlign = document.getElementById('centerJaw');
    centerAlign.style.textAlign = 'center'
})

document.getElementById('new-friend').addEventListener('click', function(){
    const friendConteiner = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend')
    friend.innerHTML = `
    <h3 class = 'friend-name'>New Friend Added</h3>
    <p>I am new yours new friend</p>
    `
    friendConteiner.appendChild(friend)
})