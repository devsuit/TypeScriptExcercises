function orderSandwich(...items: string[]): void {
  console.log("Sandwich Order:");
  if (items.length === 0) {
    console.log("You ordered an empty sandwich!");
  } else {
    console.log("Bread + " + items.join(" + ") + " + Bread");
  }
}

// Calling the function 
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Mayonnaise");
orderSandwich("Peanut Butter", "Jelly");
orderSandwich();
