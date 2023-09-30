let userEmail = '  thisissomething    '
let password = '1234'

console.log(password.length);
console.log(userEmail.toLowerCase());
console.log(userEmail.toUpperCase());
console.log(userEmail.trim());

let userChecker = function(myString) {
    if ((myString.includes(1234) && (myString.length > 15))) {
        return true
    } else {
        return false
    }
}

console.log(userChecker(userEmail))


let passChecker = function(pass) {
    if ((pass.includes("123@!") && (myString.length > 8))) {
        return true
    } else {
        return false
    }
}