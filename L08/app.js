// // Object literal
// const person = {
//     name: 'Chopper'
// }

// console.log(person);

// // Person constructor
// function person() {
//     this.name = 'Zel'
// }

// const zel = new person();

// console.log(zel);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const zel = new Person('Zel', 21);
// const jen = new Person('Jen', 21);
// console.log(zel);
// console.log(jen);


// CONSTRUCTOR AND THIS. KEYWORD
// Person constructor
function Person(name, dob) {
    this.name = name;
    this.birthdate = new Date();
    this.calculateAge = function() {
        const diff = Date.now() - this.birthdate.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


const zel = new Person('Zel', '2-26-1999');
const darwin = new Person('Darwin', '02-13-95');

console.log(zel.calculateAge());