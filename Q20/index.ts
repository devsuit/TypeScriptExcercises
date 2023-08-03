
let mountainsList: string[] = [
  "Nanga Parbat",
  "K2",
  "Broad Peak",
  "Sherpi Kangri",
  "Tirich Mir"
];


console.log("List of Mountains:");
mountainsList.forEach((mountain, index) => {
  console.log(`${index + 1}. ${mountain}`);
});
