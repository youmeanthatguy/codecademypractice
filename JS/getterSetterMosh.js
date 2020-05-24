const person = {
   firstName: ‘Mosh’,
   lastName: ‘Hamedani’
};

//Log it using a template literal
console.log(`${person.firstName} ${person.lastName}`);

//This takes a long time and you have to repeat that process every time

const person = {
    firstName: ‘Mosh’,
    lastName: ‘Hamedani’
    fullName() {
       return `${person.firstName} ${person.lastName}`)
    }
 };
 
 //Log it calling
 console.log(person.fullName());

 //This is better, but it's read only. We can't set the full name from the outside.
 //Also, we can print it cleaner.
 //Enter Getters and Setters
 
 const person = {
    firstName: ‘Mosh’,
    lastName: ‘Hamedani’
    get fullName() {
       return `${person.firstName} ${person.lastName}`)
    }
 };

 //The Get preset allows us to call the function from outside of the object without any issues.

 const person = {
    firstName: ‘Mosh’,
    lastName: ‘Hamedani’,
    get fullName() {
       return `${person.firstName} ${person.lastName}`)
    },
 };

 console.log(person);

 //Now we're all good to pull that from the object and print it, but we can't change.
 //How do we change it? With a setter.

 const person = {
    firstName: ‘Mosh’,
    lastName: ‘Hamedani’,
    get fullName() {
       return `${person.firstName} ${person.lastName}`)
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
 };

 person.fullName = 'John Smith';