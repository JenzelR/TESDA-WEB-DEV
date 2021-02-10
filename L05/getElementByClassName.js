// document.getElementsByClassName();

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[2]);
items[2].style.color = 'Green';
items[2].textContent = 'Chicken dinner';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item';);
// console.log(listItems);

//document.getElementsByTagName
let Harambe = document.getElementsByTagName('li');
console.log(Harambe);
console.log(Harambe[0]);
Harambe[2].style.color = 'White';
Harambe[2].style.backgroundImage = 'url(galaxy.jpg)'

//Convert HTML Collection itno array
Harambe = Array.from(Harambe);

Harambe.reverse();

Harambe.forEach(function(li, index) {
    console.log(li,className);
    li.textContent = `${index}: Gutom na ako`;
});
console.log(Harambe);


// document.querySelectorAll()

const items = document.querySelectorAll('ul.collection lu.collection-item');

console.log(items);

items.forEach(function(item, index){
    items.textContent = `${index}: Hello world`
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.backgroundImage = 'url(galaxy.jpg)';
    li.style.color = 'white';
});

for(let z = 0; z < liEven.length; z++) {
    liEven[i].style.background = 'lime'
}





