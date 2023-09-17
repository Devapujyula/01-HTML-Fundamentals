let iAmGlobal = "someValue"

if (true) {
    let iamLocal = 'someMoreValue'
    iAmGlobal = 'superMan'
    console.log(iAmGlobal);
    console.log(iamLocal);
}

// console.log(iamLocal);
console.log(iAmGlobal);