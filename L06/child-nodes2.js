let value;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

value =listItem;
value = list;


//Get child nodes
value = list.childNodes;
value = list.childNodes[0];
value = list.childNodes;[0].nodeName;
value = list.childNodes;[0].nodeType;

/*  1 - Element
    2 - atribute (deprecated)
    3 - text node
    8 - Comment
    9 - Document itself
    10 - Doctype   */

// Get Children Elemen Nodes

value = list.children;
value = list.children[0];
list.children[0].textContent = 'perst child';

// Children of children
list.children[3].children[0].id = 'test-link';
value = list.children[3].children[0];


// First Child
value = list.firstChild;
value = list.firstElementChild;

// Last child
value = list.lastChild;
value = list.lastElementChild;

// Count Child elements
value = list.childElementCount;

// Get parent child
value = listItem.parentNode.parentNode;

// Get next sibling
value = listItem.nextSibling;
value = listItem.nextElementSibling.nextElementSibling;


// Get prev siblings
value = listItem.previousSibling;
value = listItem.previousElementSibling;

console.log(value);

