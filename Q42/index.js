function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    return magicians.map(function (magician) { return magician + " the Great"; });
}
// Array of magician's names
var magicianNames = ["Dynamo", "Harry Houdini", "Penn Jillette", "David Blaine"];
// Adding "the Great" to each magician's name using make_great() function
var greatMagicianNames = make_great(magicianNames);
// Calling the function to show original magician's names
console.log("Original Magicians:");
show_magicians(magicianNames);
// Calling the function to show modified magician's names
console.log("\nMagicians with 'the Great':");
show_magicians(greatMagicianNames);
