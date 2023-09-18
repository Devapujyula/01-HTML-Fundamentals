// && - AND operator - Both sides need to be true
// || - OR operator - One side needs to be true
// ! - reverse sign mostly applicable in boolean operator


let isVerified = false
let isLoggedIn = false
let hasPaymentToken = false
let isGuest = false

if (!isVerified && isLoggedIn && hasPaymentToken) {
    console.log("Greetings message to user");
    console.log("Grant access to paid user");
} else if (isVerified || !isGuest) {
    console.log("Allow free previews");
} else {
    console.log("MESSAGE: Please contact admin...!");
}