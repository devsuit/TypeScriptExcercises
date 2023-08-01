var Name = "Qalbe Abbas";
console.log("Lowercase:", Name.toLowerCase());
console.log("Uppercase:", Name.toUpperCase());
console.log("Titlecase:", toTitleCase(Name));
// function to convert a string to title case
function toTitleCase(strg) {
    return strg
        .toLowerCase()
        .split(" ")
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(" ");
}
