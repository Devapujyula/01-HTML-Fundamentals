console.log("Hi....!");

let p1 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve(25)
    }, 3000)
})

let p2 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        console.log("Connection not succesfull....!");
        reject(new Error("Unsuccessfull Connection....!"))
    },5000)
})

console.log("Second Hi in between Hi and Bye...!");

p1.then((response) => {
    console.log("Bye..!");
})
.catch((error)=> {
    console.log(error);
})

p2.then((response) => {
    console.log("Bye..!");
})
.catch((error)=> {
    console.log(error);
})
