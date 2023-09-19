// Simple To-do Application

const days = ['Mon', 'Tues' ,'Wed', 'Thur', 'Fri' , 'Sat', 'Sun']

console.log(days);

// let sayHello = function() {
//     console.log("Greeting message from user");
// }


days.forEach(function(day, index) {
    console.log(`starts with ${index+1} -- ${day} Day`);

})