// BUILD IN CONSTRUCTOR

//STRING
const name1 = 'JC';
const name2 = new String('Jenzel');

console.log(name2);


if(name2 === 'Jenzel') {
    console.log('Pogi');
} else {
    console.log('Pogi parin');
}

//number
const number1 = 5;
const number2 = new Number(5);

console.log(typeof number2);


//Bolean
const bool1 = true;
const bool2 = new Boolean(true);


console.log(typeof bool2);


//Function
const getSum1 = function (x, y) {
    return x + y;
}
console.log(typeof getSum1(4,5));

const getSum2 = new Function('x', 'y', 'return 1+1');

console.log(typeof getSum2);


// Object
const jc1 = {name: 'JC'};
const jc2 = new Object({name: 'JC2'});

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(typeof arr2);