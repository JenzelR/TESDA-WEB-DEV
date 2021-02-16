// Prototype Inheritance
// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
    return `Hello There ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Erren', 'Jaegar');

console.log(person1.greeting());

//customer constructior
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

//Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer
Customer.prototype.constructor = Customer;


// Create customer
const customer1 = new Customer('David', 'Neil', '0918562222','Avengers' )

console.log(customer1);