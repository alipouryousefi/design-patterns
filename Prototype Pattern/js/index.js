// Define a prototype object (the object to be cloned)
const carPrototype = {
    make: '',
    model: '',
    year: 0,
    setColor: function (color) {
      this.color = color;
    },
    getDetails: function () {
      return `Car: ${this.make} ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    },
  };
  
  // Create a new object by cloning the prototype
  const car1 = Object.create(carPrototype);
  car1.make = 'Toyota';
  car1.model = 'Camry';
  car1.year = 2022;
  car1.setColor('Blue');
  
  const car2 = Object.create(carPrototype);
  car2.make = 'Honda';
  car2.model = 'Civic';
  car2.year = 2021;
  car2.setColor('Red');
  
  console.log(car1.getDetails()); // Output: Car: Toyota Camry, Year: 2022, Color: Blue
  console.log(car2.getDetails()); // Output: Car: Honda Civic, Year: 2021, Color: Red
  