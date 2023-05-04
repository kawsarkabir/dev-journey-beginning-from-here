function getComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then (data => showComments(data))
}

function showComments(data){
    const commentContainer = document.getElementById('comment-container');

    for(const comment of data){
        console.log(comment);
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
        <h2>${comment.id}</h2>
        <h2>${comment.name}</h2>
        <h3>${comment.postId}</h3>
         `
        commentContainer.appendChild(commentDiv)
    }
}