/*
Define a function that can answer the role of a user
A user can be on following roles:
admin - with all access
subadmin - with access to create/ delete of courses
testprep - with access to create/ delete of tests
user - consume all content
other - trail user.

Inputs: getUserRole(name, role)
*/
var getUserRole = function(name, role) {
// function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all acess`
            break; // If return is given no need of break here after return the piece of code doesnot work
        case "subadmin":
            return `${name} is admin with access to create/ delete of courses`
            break;
        case "testprep":
            return `${name} is testprep with access to create/ delete of tests`
            break;
        case "user":
            return `${name} is user to consumes all content`
            break;   
    
        default:
            return `${name} is trail user`
            break;
    }
}

console.log(getUserRole("Prakash", "testprep"));

var getRole = getUserRole("sammy", "user")

console.log(getRole);