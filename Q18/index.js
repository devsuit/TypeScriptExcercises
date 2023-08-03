var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Gilgit"];
console.log("Original order of places to visit:");
console.log(placesToVisit);
console.log("\nArray in alphabetical order (without modifying the original list):");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("\nOriginal order of places to visit (still unchanged):");
console.log(placesToVisit);
console.log("\nArray in reverse alphabetical order (without modifying the original list):");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nArray in reverse alphabetical order (modified the original list):");
console.log(placesToVisit);
