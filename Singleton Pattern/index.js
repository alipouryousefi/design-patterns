// Singleton class
class Singleton {
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance; // Return the existing instance if it already exists
      }
  
      // Initialize the instance if it doesn't exist
      this.data = Math.random(); // Replace with the shared resource you want to manage
  
      Singleton.instance = this; // Save the instance to ensure it's a singleton
    }
  
    // Add methods or properties as needed
    getData() {
      return this.data;
    }
  }
  
  // Usage
  const instance1 = new Singleton();
  const instance2 = new Singleton();
  
  console.log(instance1 === instance2); // Output: true (Both instances are the same)
  
  console.log(instance1.getData()); // Output: Some random value
  console.log(instance2.getData()); // Output: Same random value as instance1