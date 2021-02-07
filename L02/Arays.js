const numbers = [7,11,17,71,117,171]; 
const numbersjr = new Array(21,27,37,47);
const fruit = ['Dragon Fruit','Melon','Watermelon','Honeydew Melon'];
const mixed = [777,'manga','anime','webnovels','are my hobbies',true,undefined,null,{a:1,b:2}];
let value;
let con

// Get array Length
value = numbers.length;

// Check if is array
value = Array.isArray(numbers);

// Get single value 
value = numbers[2];
value = numbers[0];

// Insert to array
numbers[0] =  777;


// Find index value
value = numbers.indexOf(36);


//Mutating Arrays
//add to end
numbers.push(1);
// add to front
numbers.unshift(2);

// Take off from end
numbers.pop();
// Take off from front
numbers.shift();

// Splice value
numbers.splice(1-5);

// Reverse
numbers.reverse();

//Concatenate array
value = numbers.concat(mixed);

// Sorting arrays
value = fruit.sort();
value = numbers.sort();

// Use the compare function
value = numbers.sort(function(x, y) {
    return x - y;
});
// Reverse sort
value = numbers.sort(function(x, y) {
    return y - x;
});

// Find 
function over50(num) {
    return num>50; 
}

value = numbers.find(over50);
console.log(value);
console.log(mixed);