let Name: string = "Qalbe Abbas";

console.log("Lowercase:", Name.toLowerCase());

console.log("Uppercase:", Name.toUpperCase());

console.log("Titlecase:", toTitleCase(Name));

// function 
function toTitleCase(strg: string): string {
  return strg
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}