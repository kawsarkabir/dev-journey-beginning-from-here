document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementById('friend');

    for(const singleFriend of friends){
        singleFriend.style.backgroundColor = 'red';
    }
});