const { addDateEmployed } = require("./addDateEmployed");
const { userObject } = require ("./main");


 module.exports = {


     getTax (userObj) {

    if (userObj.dateEmployed == "12/12/2022") {
        let tax =  (userObj.salary * 0.1);
        
        userObj["tax"] = tax;

        console.log(userObj);
    } 
    else {
        let tax = "Not Eligible For tax Payment";
        console.log(tax);
    }
}
 }




