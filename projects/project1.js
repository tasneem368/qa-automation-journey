// User Management System
    // * Objects to store users
    // * Functions to add/remove/find users

// * Objects to store users let instade of const because we will be modifying the array
let users = []

function addUser(email, password, discord) {
    const newUser = {
        email,
        password,       
        discord
    };
    users.push(newUser);
}
function removeUser(email) {
    users = users.filter(user => user.email !== email);
}
function findUser(email) {
    return users.find(user => user.email === email);
}

addUser("testemail@gmail.com", "testpassword", "testdiscord");
addUser("test2@gmail.com", "testpassword2", "testdiscord2");
removeUser("test2@gmail.com");
findUser("testemail@gmail.com");
console.log(users); 