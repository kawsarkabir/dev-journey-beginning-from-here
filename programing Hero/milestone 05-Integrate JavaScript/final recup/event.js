/* document.getElementById('wel-btn').addEventListener('click', function(){
    const headerContainer = document.getElementById('header')
    const h1 = document.createElement('h1');
    h1.innerText = 'yeyo event a apnake sagotom';
    headerContainer.appendChild(h1);
})
// bg set 
document.getElementById('header').addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow'
});
 */

// step 1: add event listener 
/* document.getElementById('btn-post').addEventListener('click', function(){
    // step 2: get the comment
    const commentBox = document.getElementById('comment-box');
    const newComment = commentBox.value;
    
    // step 3: create peragraph element
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p)
    commentBox.value = '';
}) */


// step 1 add even listener
/* document.getElementById('btn-comment').addEventListener('click', function(){
    // step 2 : com 
    const commentBox = document.getElementById('comment-box');
    const getComment =commentBox.value;
    // set the value of new comment
    const commentContainer = document.getElementById('comment-container')
    const p = document.createElement('p');
    p.innerText = getComment;
    commentContainer.appendChild(p);
    commentBox.value = '';
    
}) */


// document.getElementById('btn-more').addEventListener('click', function(){
//     console.log('yeoo');
// })


// document.getElementById('input-field').addEventListener('focus', function(){
//     console.log(' focus click');
// })
/* document.getElementById('input-field').addEventListener('blur', function(){
    console.log(' blue click');
}) */

/* document.getElementById('input-field').addEventListener('keydown', function(e){
    console.log(e.target.value);
}) */


/* document.getElementById('input-field').addEventListener('keypress', function(e){
    console.log(e.target.value);
}) */

// document.getElementById('input-field').addEventListener('keyup', function(e){
//     console.log(e.target.value);
// })
document.getElementById('input-field').addEventListener('keyup', function(e){
    const text = e.target.value;
    const deleteBtn = document.getElementById('btn-delete');
    if(text === 'delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled')
    }
});
document.getElementById('btn-delete').addEventListener('click', function(){
    const secrect =  document.getElementById('secrect-info');
     secrect.style.display = 'none'
     })