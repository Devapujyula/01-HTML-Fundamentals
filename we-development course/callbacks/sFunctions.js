function abc() {
    console.log("I am inside abc");
}

console.log("Hello");
setTimeout(abc, 5000)
console.log("Hiii");



let interval = setInterval(abc, 1000)
console.log("Hii");

function clear() {
    clearInterval(interval)
}

setTimeout(clear, 3000)
