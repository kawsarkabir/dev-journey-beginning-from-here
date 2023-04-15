// create a dynamic elements
/* const awesomeDom2 = document.getElementById('awesome-dom2');
const li = document.createElement('li');
li.innerText = 'create elements';
awesomeDom2.appendChild(li); */

// create a section 
const sectionContainer = document.getElementById('section-container');

// select main container
const section = document.createElement('section');

// create items child
const h1 = document.createElement('h1');
h1.innerText = 'My skill';
section.appendChild(h1)

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'HTML';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'CSS';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'JavaScript';
ul.appendChild(li3);

section.appendChild(ul);
sectionContainer.appendChild(section);


// set html direcly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>my regular dress List</h1>
<ul>
<li> t-shirt </li>
<li> shirt </li>
</ul>
`
sectionContainer.appendChild(sectionDress)