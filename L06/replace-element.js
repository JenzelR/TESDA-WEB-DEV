//Replace Element

//create element
const newHead = document.createElement('h2');
//addid
newHead.id = 'task-title';
//New text node
newHead.appendChild(document.createTextNode('Listahan'));

// Get the old heading
const oldHead = document.querySelector('#task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHead, oldHead);

// Remove list item
const liz = document.querySelectorAll('li');
const listahan = document.querySelector('ul');

//Remove list item
liz[0].remove();

//remove child element
// list.removeChild(liz[2]);

// Classes and Attr
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let value
// classes
value = link.className;
value = link.classList;
value = link.className[1];
link.classList.add('test');
link.classList.remove('test');

//Attribute
value = link.getAttribute('href');
value = link.setAttribute('href', 'https://mangakakalot.com/');
link.setAttribute('title', 'manga');
value = link.hasAttribute('title');
value = link;

console.log(value);