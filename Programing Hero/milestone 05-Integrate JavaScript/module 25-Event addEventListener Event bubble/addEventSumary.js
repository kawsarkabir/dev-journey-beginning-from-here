// final option 1
function handleOnClick(){
    const handlerStstus = document.getElementById('handler-status');
    handlerStstus.innerText = 'on click diye kora hoise'
}

// final option 2
document.getElementById('event-listener').addEventListener('click', function(){
    const handlerStstus = document.getElementById('handler-status')
    handlerStstus.innerText = 'event lisener diye kora hoise'
})