// Show user a signout if he is authenticated
// other wise show him option to Login/Signup

var authenticated = true;

// Type1

if(authenticated) {
    console.log("Show signout button");
} else {
    console.log("Show login option");
}

// Type2

authenticated ? console.log("SignOut Button") : console.log("LogInButton"); 