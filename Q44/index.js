function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich!");
    }
    else {
        console.log("Bread + " + items.join(" + ") + " + Bread");
    }
}
// Calling the function 
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Mayonnaise");
orderSandwich("Peanut Butter", "Jelly");
orderSandwich();
