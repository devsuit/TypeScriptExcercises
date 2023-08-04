function describe_city(city: string, country: string = "Unknown"): void {
  console.log(`${city} is in ${country}.`);
}

// Calling the function 
describe_city("Karachi", "Pakistan");
describe_city("London", "United Kingdom");
describe_city("Chicago");