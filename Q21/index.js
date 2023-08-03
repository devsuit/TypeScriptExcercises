var fruitsList = [
    {
        name: "Apple",
        color: "Red",
        taste: "Sweet and Crisp",
        isTropical: false
    },
    {
        name: "Mango",
        color: "Yellow",
        taste: "Sweet and Juicy",
        isTropical: true
    },
    {
        name: "Banana",
        color: "Yellow",
        taste: "Sweet and Creamy",
        isTropical: true
    },
    {
        name: "Grapes",
        color: "Green",
        taste: "Sweet and Tangy",
        isTropical: false
    },
    {
        name: "Pineapple",
        color: "Yellow",
        taste: "Sweet and Tart",
        isTropical: true
    }
];
console.log("List of Fruits:");
fruitsList.forEach(function (fruit, index) {
    console.log("".concat(index + 1, ". ").concat(fruit.name, " (").concat(fruit.color, ") - Taste: ").concat(fruit.taste, ", Tropical: ").concat(fruit.isTropical ? "Yes" : "No"));
});
