function todosDisplay(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => showTodos(data))
}
todosDisplay();
function showTodos(data){
    const todosContainer = document.getElementById('todos-container');
    todosContainer.classList.add('todos')
    for(const todo of data){
        const todosDiv = document.createElement('div');
        todosDiv.innerHTML = `
        <h2>${todo.id}</h2>
        <h4>${todo.title}</h4>
        <h4>${todo.completed ? 'its complete': 'its not complete'}</h4>

        `
        todosContainer.appendChild(todosDiv)
    }
}