// ES6 Classes

class Person {
    constructor(firstName, lastName, dob,){
this.firstName = firstName;
this.lastName = lastName;
this.birthdate = new Date(dob);
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }
    
    greeting(){
        return `${this.firstName} ${this.lastName} has 70 Watermelons`;
    }

    static addNumbers(x, y){
return x + y;
    }
}

const Mash = new Person('Mash', 'Potatoes', '1-02-03',);

Mash.getsMarried('Potatoes');

console.log(Mash);
console.log(Person.addNumbers(7,7));