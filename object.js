const parentFunction = function () {
    const price = 500;
    child();

}

const child = function closures() {
    console.log(price)
    console.log(this)
}
// parentFunction();clear

// child();

// Destructuring
const obj = {
    firstname: "Anshul",
    lastName: "Yadav",
    "college Information": {
        course: "Btech",
        branch: "IT",
        year: "2023"
    },
    age: "20"

}

const { firstname, ...newobj } = obj
// console.log(firstname)
// console.log(newobj)


// Spread Operator
const newobj1 = { ...obj, firstname: "Ayush" }
console.log(newobj1);