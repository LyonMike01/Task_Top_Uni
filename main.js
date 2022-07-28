
const { addDateEmployed } = require("./addDateEmployed");
const { getTax } = require ("./getTax");

let dateEmp = addDateEmployed();
let payAble = getTax();


exports.userObject = {
    name: "John Doe",
    employeeId: "0001AA",
    salary: 500_000_000,
    taxRate: "10%"
}



function compute() {
    let userWithDate = dateEmp(userObject);
    let userWithTax = payAble(userWithDate);
    return userWithTax;
}

console.log(compute());



