class person {
    constructor(name,age,gender) {
        this.name = name
        this.age = age
        this.gender = gender 

        // this is ee yokka object yokkaa ani ardam
    }


     walk() {
        console.log("Walking");
    }

    run() {
        console.log("Running");
    }

    eat() {
        console.log(this.name + " "+ "Eating");
    }
}

let person1 = new person("Kanna", 23, 'Male')
let person2 = new person("Ram", 24, 'Male')

console.log(person1.name);
console.log(person2.name);

person1.eat()
person2.walk()