let current_users: string[] = ["abbas", "ahmed", "ali", "aqib", "asif"];
let new_users: string[] = ["ali", "abdullah", "fakhar", "dani", "munawar"];

for (let newUser of new_users) {
  let usernameExists = false;
  for (let currentUser of current_users) {
    if (newUser === currentUser) {
      usernameExists = true;
      break;
    }
  }

  if (usernameExists) {
    console.log(`The username "${newUser}" is already taken. Please enter a new username.`);
  } else {
    console.log(`The username "${newUser}" is available.`);
    current_users.push(newUser);
  }
}
