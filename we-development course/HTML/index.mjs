// const greeting =(Id) => {
//     console.log(`Hello ${Id}`)
// }

// greeting("Malathi")
// greeting("Chinnu")

// var add = require('./calculator')
// var sub = require('./calculator')

// const calculator = require('./calculator')
// const {add, sub} = calculator

// const {add, sub} = require('./calculator')
// import {message} from './calculator.mjs'
// console.log(message);

// const displayNumber = num => console.log(num);

// displayNumber(num);
// import sum from "./calculator.mjs";

// console.log(sum(2, 6));
// console.log(add(6,9))
// console.log(sub(15,8))
// console.log(sub(15,8))

// const displayName = (text) => {
//     console.log(text);
//   };
  
//   displayName(text);

// let purchaseDetails = {
//     item: "Watch",
//     location: "Mumbai",
//     total: 499,
//     purchase: function() {
//       console.log(this.total);
//     },
//   };
  
//   purchaseDetails.purchase();

// const perimeterOfSuare = side => console.log(4*side)

// const calculator = require('./calculator.mjs')
// const {perimeterOfSuare, areaOfSquare} = calculator

// perimeterOfSuare(6)
// areaOfSquare(6)

// const stanza = "Humpty Dumpty Sat On a Wall sit";

// console.log(stanza.slice(0, 5));

// import { animalName, animalSound } from "./calculator.mjs";

// animalName("Cat");
// animalSound("Meow");

// const company = require("./calculator");
// const { companyName, companyWebsite } = company;

// console.log(companyName);
// console.log(companyWebsite);

// let continentsList1 = [
//     "Africa",
//     "Antarctica",
//     "North America",
//     "South America",
//     "Australia",
//   ];
  
//   let continentsList2 = [...continentsList1, "Asia", "Europe"];
  
//   console.log(continentsList2.length);

// import isQualified from "./calculator.mjs";

// const teamData = { team: "Rex", score: 10 };

// const qualifyScore = 11;

// console.log(isQualified(teamData.score, qualifyScore));

// let temperatureInCelsius = 27;

// let tempStatus = temperatureInCelsius > 30 ? "High" : "Low";

// console.log(`Temperature is ${tempStatus}`);

// const sentence = "Twinkle twinkle little stars";

// const word = sentence.includes("ink");

// console.log(word);

// const company = require("./calculator");
// const { companyName, companyWebsite } = company;

// console.log(companyName);
// console.log(companyWebsite);

// const StudentDetails = require("./calculator.mjs");

// const studentDetails = new StudentDetails();

// console.log(studentDetails.name);

// console.log(studentDetails.score);

// import { isGreaterThanFive, isLessThanTen } from "./calculator.mjs";

// console.log(isGreaterThanFive(3));

// console.log(isLessThanTen(8));

// const { sum, sub } = require("./calcu");

// console.log(sum(2, 3));

// console.log(sub(3, 4));

// import BookDetails from "./calculator.mjs";

// const newBookDetails = new BookDetails();
// console.log(newBookDetails.title);

// import sum from "./calculator.mjs";

// console.log(sum());

// import rating from "./calculator.mjs";

// console.log(rating);

// const { school, session } = require("./calculator.mjs");

// const newSchool = new school();
// const newSession = new session();

// console.log(newSchool.city);
// console.log(newSession.teacher);

// import { musicPlayer, playSport } from "./calculator.mjs";

// musicPlayer("Twinkle Twinkle");

// playSport("Cricket");

// const { isTall } = require("./ca");

// console.log(isTall);

// console.log(isThin);

import { StudentDetails, CarDetails } from "./calculator.mjs";

const newStudentDetails = new StudentDetails();
console.log(newStudentDetails.isPresent);

const newCarDetails = new CarDetails();
console.log(newCarDetails.maxSpeed);