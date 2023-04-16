let containers = document.getElementById('container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = ' section title-4'
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'list items - 1';
ul.appendChild(li1)
section.appendChild(ul)

containers.appendChild(section);
