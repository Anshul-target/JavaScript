const obj = {
    "food item": 5,
    vegitables: 10,
    add() {

        console.log(`The sum is ${this["food item"] + this.vegitables}`);
    }
}

obj["food item"] = 10;

obj.add();


function Person() {
    this.name = "Anshul"
    this.age = 30;
    return {
        name: this.name,
        age: this.age
    };
}

const person = new Person();
console.log(person)