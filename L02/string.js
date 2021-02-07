//String 
const firstName = 'Jenzel';
const lastName = 'Rivera';
const age = '21';
const str = 'Hello there my name is Jose Rizal';
const tags = 'Web Development, Web Design, Progamming';
const quote = " You're only limit is your mind."

//Concatenation
let val; 
val = firstName +" "+ lastName;
console.log(val);

//Append
dog = "Monkey D ";
dog += "Luffy";
console.log(dog);

cat = "My name is " + firstName +" " + lastName + " and I'm " + age;
console.log(cat); 

//Escaping
Escape = "You're you and I'm me";
console.log(Escape);

//Length
pogi = firstName.length;
console.log(pogi);

//concat
hotdog = firstName.concat(' ' + lastName);
console.log(hotdog);

//Change case
me = firstName.toLowerCase()+ " ";
me += lastName.toUpperCase();
console.log(me);

val = firstName[3];
lav = firstName.charAt('3')
console.log(lav);

//Substring
jenz = firstName.substring(3, 7);
console.log(jenz);

//Slice
zel = firstName.slice(0,4);
negative = firstName.slice(-6);
console.log(negative);

//split
val = quote.split(" ");
console.log(val);

//Replace
palit = str.replace('Jose Rizal', 'Jenzel Rivera');
console.log(palit);

//Inlcludes
kasali = quote.includes('mind');
console.log(kasali);