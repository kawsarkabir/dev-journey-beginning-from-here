function commnents(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(ress => ress.json())
    .then(data => showDisplay(data))
}
commnents();
function showDisplay(data){
    const commentContainer = document.getElementById('comment-container');
    for(const commentItem of data){
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML= `
        <h1>${commentItem.id}</h1>
        `
        commentContainer.appendChild(commentDiv)
    }
}