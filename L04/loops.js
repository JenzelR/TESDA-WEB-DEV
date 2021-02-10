// FOR LOOPS

for(let i = 0; i < 10; i++) {
    if(i === 3) {
        console.log('It passed 3 ');
        continue;
    }
    if (i === 5) {
        console.log('Stops at 5');
        break;
    }

    console.log(`Number ${i}`);
}


//While Loop

let i = 0;

while(i <= 100){
    console.log(`Number ${i}`);
    i++;
}


//Do While
do{
    console.log(`Number ${i}`);
    i++;
}

while(i < 10);


//Loop Through Array
const cars = ['Ford', 'Toyota', 'Honda'];

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}


//For Each
cars.forEach(function(car, index, array) {
    console.log(`${index}) : ${car}`);
    console.log(`${array}`);
})


//Map
const users = [{id: 1, name: 'Jenzel'}, {id: 2, name: 'Rivera'}, {id: 3, name: 'is'}, {id: 4, name: 'Good'}];

const ids = users.map(function(user) {
    return user.name;
} );

console.log(ids);

//For in Loops
const user = {
    firstName: 'John',
    lastName: 'Cena',
    age: 'UNKNOWN'
};


for( let me in user) {
    console.log(`${me}: ${user[me]}`);
}
