

const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Record videos for YouTube')
myTodos.push('Go to gym')
myTodos.push('Meditate for 10 mints')

// myTodos.forEach(function(todo, index) {
//     console.log(`Your task no. ${index + 1} is: ${todo}`);
// })

for (let index = 0; index < myTodos.length; index++) {
    console.log(`Your task no ${index+1} is: ${myTodos[index]}`);
    
}

for (let index = myTodos.length - 1; index >= 0; index--) {
    console.log(`Your task no ${index} is: ${myTodos[index]}`);
    
}

// for (let index = myTodos.length; index >= 0; index--) {
//     console.log(`Your task no. ${index + 1} is: ${todo}`);
// }