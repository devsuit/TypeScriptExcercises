// Array
let mountainsList: string[] = [
"Nanga Parbat",
  "K2",
  "Broad Peak",
  "Sherpi Kangri",
  "Tirich Mir"
];

// Intentional Error: 
let invalidIndex = 10;
console.log(mountainsList[invalidIndex]);



// Corrected Program:
let validIndex = 4; 
console.log("Corrected Output:");
console.log(mountainsList[validIndex]);
