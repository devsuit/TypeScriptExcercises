var current_users = ["abbas", "ahmed", "ali", "aqib", "asif"];
var new_users = ["ali", "abdullah", "fakhar", "dani", "munawar"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUser = new_users_1[_i];
    var usernameExists = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var currentUser = current_users_1[_a];
        if (newUser === currentUser) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log("The username \"".concat(newUser, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(newUser, "\" is available."));
        current_users.push(newUser);
    }
}
