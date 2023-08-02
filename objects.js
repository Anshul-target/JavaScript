const obj = {
    "food item": 5,
    vegitables: 10,
    add() {

        console.log(`The sum is ${this["food item"] + this.vegitables}`);
    }
}

obj["food item"] = 10;

// obj.add();


class Person {
    constructor() {
        this.name = "Anshul";
        this.age = 30;
    }
    add() {
        return ("hello");
    }
}

const person = new Person();
console.log(person);
console.log(person.add());
// console.log(person.age);
