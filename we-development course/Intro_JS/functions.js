let sayHello = function(name) {
    console.log(`Greeting message for user ${name}`);
    console.log(`Hey ${name}`);
}

// sayHello("Bobby")

let fullName = function(firstName, secondName) {
    console.log(`Welcome on board ${firstName}`);
    console.log(`Happy to have you here ${firstName} ${secondName}`);
}

fullName("Prasanna", "Devapujyula")

let myAdder = function(num1, num2) {
    let added = num1 + num2
    return added
}

myAdder(1,2)
console.log(myAdder(3,4));

let result = myAdder(5,8)
console.log(result);

