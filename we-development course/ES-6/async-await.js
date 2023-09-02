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
    },3000)
})

console.log("Second Hi in between Hi and Bye...!");

async function dbCall() {
    let response = await p1
    console.log(response);
}

dbCall()
console.log("Hello");


