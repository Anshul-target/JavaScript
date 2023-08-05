const parentFunction = function () {
    const price = 500;
    child();

}

const child = function closures() {
    console.log(price)
    console.log(this)
}
parentFunction();
// child();