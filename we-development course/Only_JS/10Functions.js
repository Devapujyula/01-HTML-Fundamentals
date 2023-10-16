function sayHello(name) {
    console.log("Hello this is Prakash");
    console.log(`Hello this is ${name}, How are you??`);
}

// This is the calling the function
sayHello("Prakash");
sayHello("Sowmya");

// This is referencing the function
sayHello;


function namstey() {
    return 'Hello in India'
}

// Here just we are calling and not asking to log the value
namstey()

var greetings = namstey()

console.log(greetings);
console.log(namstey());