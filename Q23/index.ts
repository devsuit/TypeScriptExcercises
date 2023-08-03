let age = 25;
let personName = "Abbas";
let isStudentStatus = true;
let car = "subaru";
let fruits = ["apple", "orange", "banana"];
let emptyArray: string[] = [];

console.log("Is age greater than 18? I predict True.");
console.log(age > 18);

console.log("Is personName equal to 'Abbas'? I predict True.");
console.log(personName === "Abbas");

console.log("Is isStudentStatus equal to true? I predict True.");
console.log(isStudentStatus);

console.log("Is car not equal to 'BMW'? I predict True.");
console.log(car !== "BMW");

console.log("Is 'apple' included in the fruits array? I predict True.");
console.log(fruits.indexOf("apple") !== -1);

console.log("Is the length of fruits array less than 2? I predict False.");
console.log(fruits.length < 2);

console.log("Is emptyArray empty? I predict False.");
console.log(emptyArray.length === 1);

console.log("Is age less than or equal to 20? I predict False.");
console.log(age <= 20);

console.log("Is personName equal to 'Ali'? I predict False.");
console.log(personName === "Ali");

console.log("Is isStudentStatus equal to false? I predict False.");
console.log(!isStudentStatus); 
