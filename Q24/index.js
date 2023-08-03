var personName = "Ali";
var personAge = 30;
var testScore = 85;
var isStudent = true;
var fruits = ["apple", "orange", "banana"];
// Tests for equality and inequality with strings
console.log("Is personName equal to 'Ali'? I predict True.");
console.log(personName === "Ali");
console.log("Is personName not equal to 'Asif'? I predict True.");
console.log(personName !== "Asif");
// Tests using the lower case function
console.log("Is personName in lowercase 'ali'? I predict True.");
console.log(personName.toLowerCase() === "ali");
console.log("Is personName in lowercase 'ALI'? I predict False.");
console.log(personName.toLowerCase() === "ALI");
// Numerical tests
console.log("Is personAge greater than 25? I predict True.");
console.log(personAge > 25);
console.log("Is personAge less than or equal to 30? I predict True.");
console.log(personAge <= 30);
console.log("Is testScore not equal to 80? I predict True.");
console.log(testScore !== 80);
console.log("Is testScore not equal to 90? I predict True.");
console.log(testScore !== 90);
console.log("Is testScore greater than or equal to 70 and less than or equal to 90? I predict True.");
console.log(testScore >= 70 && testScore <= 90);
// Tests using "and" and "or" operators
console.log("Is isStudent equal to true and personAge greater than 18? I predict True.");
console.log(isStudent && personAge > 18);
console.log("Is isStudent equal to true or personAge greater than 40? I predict True.");
console.log(isStudent || personAge > 40);
// Test whether an item is in an array
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.indexOf("banana") !== -1);
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(fruits.indexOf("grape") === -1);
