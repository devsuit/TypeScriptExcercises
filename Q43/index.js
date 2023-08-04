function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    return magicians.map(function (magician) { return magician + " the Great"; });
}
var magicianNames = ["Dynamo", "Harry Houdini", "Penn Jillette", "David Blaine"];
var magicianNamesCopy = magicianNames.slice();
var greatMagicianNames = make_great(magicianNamesCopy);
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nMagicians with 'the Great':");
show_magicians(greatMagicianNames);
