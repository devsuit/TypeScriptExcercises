
interface Fruit {
  name: string;
  color: string;
  taste: string;
  isTropical: boolean;
}


let fruitsList: Fruit[] = [
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
fruitsList.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit.name} (${fruit.color}) - Taste: ${fruit.taste}, Tropical: ${fruit.isTropical ? "Yes" : "No"}`);
});
