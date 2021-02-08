//Function Declaration

function greet(firstName = 'Jenzel', lastName = 'Rivera') {
    if(typeof firstName === 'undefined'){
        firstName = 'Jenzel';
    }
    if(typeof lastName === 'undefined'){
        lastName = 'Rivera';
    }

    console.log('Hello');
    return `Hello ${firstName} ${lastName}`;
}

console.log(greet(''));

//Function Expressions
const square = function(x){
    return x * x;

}

console.log(square(7));

// Immediately Invokable Function Expressions - IIFEs

(function(name){
    console.log(`Name ${name}`)
})('Fishball');


// Property Methods
const todo = {
    add: function() {
        console.log('Add todo');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = function(){
    console.log('Delete todo..');
}


todo.add();
todo.edit();