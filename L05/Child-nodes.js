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


console.log(value);

