document.getElementById('btn-post').addEventListener('click', function(){
    // step get the comment
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;
    console.log(newComment);
    // step 3
    // 1 get the comment contaienr
    // 2 create the element (p tag)
    // 3 set the text of the comment i
    const containerBox =document.getElementById('container-box')
    const p = document.createElement('p')
    p.innerText =newComment;
    containerBox.appendChild(p)

    // step 4: clear the text area
    commentBox.value = ''
})
