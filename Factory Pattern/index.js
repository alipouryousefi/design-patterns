// Product interface (optional but can be helpful for enforcing a common structure)
class Product {
    operation() {
      // Define the common interface for product classes
    }
  }
  
  // Concrete Product 1
  class ConcreteProduct1 extends Product {
    operation() {
      return "Result from ConcreteProduct1.";
    }
  }
  
  // Concrete Product 2
  class ConcreteProduct2 extends Product {
    operation() {
      return "Result from ConcreteProduct2.";
    }
  }
  
  // Factory class
  class Factory {
    createProduct(type) {
      if (type === "product1") {
        return new ConcreteProduct1();
      } else if (type === "product2") {
        return new ConcreteProduct2();
      } else {
        throw new Error("Invalid product type.");
      }
    }
  }
  
  // Usage
  const factory = new Factory();
  
  const product1 = factory.createProduct("product1");
  console.log(product1.operation()); // Output: Result from ConcreteProduct1.
  
  const product2 = factory.createProduct("product2");
  console.log(product2.operation()); // Output: Result from ConcreteProduct2.
  