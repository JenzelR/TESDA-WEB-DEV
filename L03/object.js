const person = {
    firstName: 'Jenzel',
    lastName: 'Rivera',
    age: 'tweny juan',
    email: 'jenzcar7@gmail.com',
    hobbies: ['manga, anime'],
    address: {
        city: 'star city',
        street: 'Di matagpuan street'
    },
    getBirthYear: function() {
        return 2020 - this.age;
        
    }
};

let value;

value = person;

value = person.firstName;
value = person.age;
value = person.hobbies[1];
value = person.address.city;
value = person.address.street;
value = person.getBirthYear();

console.log(value);

const people = [{name: 'Jenzel' , age: 21}, {name: 'Rivera' , age: 21}, {name: 'Jenz' , age: 21}];

for(let i = 0; i < people.length; i++){
    console.log(people[i].age);

};
