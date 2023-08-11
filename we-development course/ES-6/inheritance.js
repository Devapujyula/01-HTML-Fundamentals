class person {
    constructor(name,age,gender) {
        this.name = name
        this.age = age
        this.gender = gender 
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

class student extends person {
    constructor(name, age, gender,rollno, phno) {
        super(name,age,gender)
        this.phno = phno
        this.rollno = rollno
        
        
    }
}

let person1 = new person("Kanna", 23, 'Male')
let person2 = new person("Ram", 24, 'Male')

let student1 = new student("Sai", 24, 'Male', 34567, 93456783)

console.log(student1.name, student1.age, student1.gender, student1.rollno, student1.rollno );

console.log(person1.name);
console.log(person2.name);

person1.eat()
person2.walk()