class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and my favorite color is ${this.favoriteColor}.`);
    }
}

// function Person(fullName, favColor) {
//     this.name = fullName;
//     this.favoriteColor = favColor;
//     this.greet = function () {
//         console.log('Hello, my name is ' + this.name + ' and my favorite color is ' + this.favoriteColor + '.');
//     };
// }

export default Person;
