const arr =[2, 4, 6, 8]

function abc(val, index, array) {
    console.log(val, index, array );
}

let average_value = 0

function average(ele) {
average_value = average_value + ele
}

function avg(ele) {
    average(ele) 
}

arr.forEach(abc)
arr.forEach(avg)
console.log(average_value/5);