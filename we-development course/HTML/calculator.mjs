// const add =(a,b) => {
// return (a+b)
// }

// const sub=(a,b) => {
//     return(a+b)
// }
// export const add = (a,b) => {
//     return (a+b)
// }

// export const sub = (a,b) => {
//     return (a-b)
//     }

// const num = 100;

// module.exports = num;

// export default function (num1, num2) {
//     return num1 + num2;
//   }

// export const message = "Learn Nodejs"
// module.exports.add = add;
// exports.sub = sub;

// export default add

// const text = "Hi Rahul";

// module.exports = text;

// const perimeterOfSuare = side => console.log(4*side)

// const areaOfSquare = side => console.log(side*side)

// exports.perimeterOfSuare = perimeterOfSuare
// exports.areaOfSquare = areaOfSquare

// export const animalName = (name) => {
//     console.log(name);
//   };
//   export const animalSound = (sound) => {
//     console.log(sound);
//   };

// const companyName = "NxtWave";
// const companyWebsite = "https://ccbp.in";

// exports.companyName = companyName;

// const isQualified = (teamScore, qualifyScore) => {
//     let result = teamScore > qualifyScore ? "Qualified" : "Disqualified";
//     return result;
//   };
  
//   export default isQualified;

// const companyName = "NxtWave";
// const companyWebsite = "https://ccbp.in";

// exports.companyName = companyName;

// module.exports = class StudentDetails {
//     constructor() {
//       this.name = "Rahul";
//       this.rollNo = 20;
//     }
//   };

// function isGreaterThanFive(num) {
//     return num > 5;
//   }
  
//   function isLessThanTen(num) {
//     return num < 10;
//   }
  
//   export { isGreaterThanFive, isLessThanTen };

// exports.sum = function sum(a, b) {
//     return a + b;
//   };
  
//   exports.sub = function sub(a, b) {
//     return a - b;
//   };

// export default class BookDetails {
//     constructor() {
//       this.title = "Peace Talks";
//       this.author = "Jim Butcher";
//     }
//   }

// export default function () {
//     return 10 + 16;
//   }

// let rating = 5;
// export default rating + 10;

// exports.school = class {
//     constructor() {
//       this.name = "APJ school";
//       this.city = "Hyderabad";
//     }
//   };
  
//   exports.session = class {
//     constructor() {
//       this.subject = "English";
//       this.teacher = "Srinivas";
//     }
//   };
// function musicPlayer(rhyme) {
//     return console.log(`Playing ${rhyme} rhyme`);
//   }
  
//   function playSport(sport) {
//     return console.log(`Playing ${sport}`);
//   }
  
//   export { musicPlayer, playSport };

// exports.isTall = true;
// exports.isThin = false;

class StudentDetails {
    constructor() {
      this.student = "Rahul";
      this.isPresent = true;
    }
  }
  
  class CarDetails {
    constructor() {
      this.brand = "Bugatti";
      this.maxSpeed = "483kmph";
    }
  }
  
  export { StudentDetails, CarDetails };

