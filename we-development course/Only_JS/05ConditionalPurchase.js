// User is only allowed to make a purchase when he is:
// Logged in
// Email verified
// CardInfo - valid
// If any one is missing, stop purchase

var isLoggedIn = true
var isEmailVerified = true
var cardInfo = true

// Type1: using Conditionals

if (isLoggedIn) {
    console.log("Logged IN Success");
    if (isEmailVerified) {
        console.log("Email is verified");
        if (cardInfo) {
            console.log("You can make a purchase");
        }
    }
}

// Type2: using Operators

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allow user to make a purchase");
} else {
    console.log("You are not allowed do that");
}