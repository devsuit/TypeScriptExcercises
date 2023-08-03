let placesToVisit: string[] = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Gilgit"];

console.log("Original order of places to visit:");
console.log(placesToVisit);

console.log("\nArray in alphabetical order (without modifying the original list):");
console.log([...placesToVisit].sort());

console.log("\nOriginal order of places to visit (still unchanged):");
console.log(placesToVisit);

console.log("\nArray in reverse alphabetical order (without modifying the original list):");
console.log([...placesToVisit].sort().reverse());

console.log("\nOriginal order of places to visit (still unchanged):");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("\nArray in reversed order (modified the original list):");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("\nArray in its original order (modified the original list):");
console.log(placesToVisit);

placesToVisit.sort();
console.log("\nArray in alphabetical order (modified the original list):");
console.log(placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nArray in reverse alphabetical order (modified the original list):");
console.log(placesToVisit);