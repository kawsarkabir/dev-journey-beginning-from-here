document.getElementById('comment-btn').addEventListener('click' , function(){
    const commentBox = document.getElementById('new-comment');
    const newComments = commentBox.value;

    const containerBox = document.getElementById('container-box')
    const p = document.createElement('p');
    p.innerText = newComments;
    containerBox.appendChild(p);
    commentBox.value= ''
})