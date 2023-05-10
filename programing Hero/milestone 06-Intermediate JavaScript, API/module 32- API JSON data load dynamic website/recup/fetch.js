/* //  stringiify && parse
const user = {id: 1, name:'Gorib people', job:'dev'}
const stringiField = JSON.stringify(user)
console.log(stringiField);
const parseField = JSON.parse(stringiField)
console.log(parseField); */
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(data=> console.log(data));

const loadPerson =()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data=> console.log(data))
}
loadPerson();