//Prototype
//Object.prototype
//Person.prototype

// Person Constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthdate.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate age
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthdate.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full Name
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}

const jackieChan = new Person('Jackie', 'Chan', '8-20-00');

jackieChan.getsMarried('JetLee');

console.log(jackieChan.getFullName());

console.log(jackieChan.hasOwnProperty('age'));



