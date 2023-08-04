function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  return magicians.map(magician => magician + " the Great");
}

let magicianNames: string[] = ["Dynamo", "Harry Houdini", "Penn Jillette", "David Blaine"];

let magicianNamesCopy: string[] = magicianNames.slice();

let greatMagicianNames: string[] = make_great(magicianNamesCopy);

console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nMagicians with 'the Great':");
show_magicians(greatMagicianNames);
