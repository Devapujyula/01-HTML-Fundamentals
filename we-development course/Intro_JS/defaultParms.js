let myMultiplier= function(num1, num2) {
    // let multiplier = num1 * num2
    // return multiplier
    return num1 * num2
}

console.log(myMultiplier(9,9));

let guestUser = function(name= 'unName', courseCount = '0') {
    return "Hello " + name + ' and Your course count is: ' +courseCount
}

guestUser()
console.log(guestUser("Bobby", 45));

// let name = null