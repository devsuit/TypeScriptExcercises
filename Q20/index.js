var mountainsList = [
    "Nanga Parbat",
    "K2",
    "Broad Peak",
    "Sherpi Kangri",
    "Tirich Mir"
];
console.log("List of Mountains:");
mountainsList.forEach(function (mountain, index) {
    console.log("".concat(index + 1, ". ").concat(mountain));
});
