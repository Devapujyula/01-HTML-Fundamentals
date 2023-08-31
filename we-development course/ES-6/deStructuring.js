let arr = [1,2,3,4,5]
console.log(arr);

let ele1 = arr[0]
let ele2 = arr[1]
let ele3 = arr[2]
let ele4 = arr[3]

console.log(ele1,ele2,ele3,ele4);

// Destructuring of Array

let array = [5,6,7,8]

let [e1,e2,e3,e4] = array

console.log(e1,e2,e3,e4);

let course  = {
    'topic1' : 'html',
    'topic2' : 'css',
    'topic3' : 'js'
}

let {topic1, topic2, topic3} = course

console.log(topic1, topic2, topic3);