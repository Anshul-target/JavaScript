const obj = {
    "food item": 5,
    vegitables: 10,
    add() {

        console.log(`The sum is ${this["food item"] + this.vegitables}`);
    }
}