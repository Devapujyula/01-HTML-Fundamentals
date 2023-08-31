function add (n1,n2) {
    return n1+n2
}

let answer = add(3,5)
console.log(answer);

function addition (n1,n2) {
    console.log(n1+n2);
}

addition(3,5)

let sub = (n1,n2) => {
    console.log(n1-n2);
}

sub(90,50)

let oddEven = (num) => {
    if (num%2==0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}

oddEven(2)
