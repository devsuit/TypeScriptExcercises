function createCar(manufacturer: string, model: string, ...options: Record<string, unknown>[]): Record<string, unknown> {
    const carInfo: Record<string, unknown> = {
      Manufacturer: manufacturer,
      Model: model,
      ...options.reduce((acc, option) => ({ ...acc, ...option }), {})
    };
  
    return carInfo;
  }
  let car1 = createCar("Honda", "Civic", { Color: "White", Sunroof: true });
  let car2 = createCar("Toyota", "Corolla", { Color: "Black", Year: 2023 });


  console.log(car1);
  console.log(car2);
  