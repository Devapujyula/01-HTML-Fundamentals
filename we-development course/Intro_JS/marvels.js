// dataType - Array

const superHeroes = ['Iron Man', 'Spider Man', 'Captain America', 'Thor']

console.log(superHeroes);
console.log(superHeroes[0]);
console.log(superHeroes[2]);
console.log(superHeroes.length);
console.log([superHeroes.length]);
console.log(superHeroes[superHeroes.length-1]);

// Template Literals

console.log(`We have ${superHeroes.length} super heroes`);

const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

// numbers[1] = 'SOMETHING'

console.log(numbers);

// start

// numbers.shift()
// console.log(numbers);

// console.log(numbers.shift());

// numbers.unshift('SOMETHING')
// console.log(numbers);

// end

// numbers.pop()
// console.log(numbers);

// console.log("The element to be deleted is : "+numbers.pop());

// numbers.push('Seven')
// console.log(numbers);


// Middle

numbers.splice(2, 1, 'SOMETHING')
console.log(numbers);





