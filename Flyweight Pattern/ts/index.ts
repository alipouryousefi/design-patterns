// Flyweight Factory
class CoffeeFlavorFactory {
  private flavors: { [flavor: string]: CoffeeFlavor } = {};

  getFlavor(flavorName: string) {
    if (!this.flavors[flavorName]) {
      this.flavors[flavorName] = new CoffeeFlavor(flavorName);
    }
    return this.flavors[flavorName];
  }

  getTotalFlavors() {
    return Object.keys(this.flavors).length;
  }
}

// Flyweight
class CoffeeFlavor {
  constructor(private flavorName: string) {}

  serveCoffee(tableNumber: number) {
    console.log(`Serving ${this.flavorName} coffee to table #${tableNumber}`);
  }
}

// Client
class CoffeeShop {
  private orders: { flavor: CoffeeFlavor; tableNumber: number }[] = [];
  private flavorFactory = new CoffeeFlavorFactory();

  takeOrder(flavorName: string, tableNumber: number) {
    const flavor = this.flavorFactory.getFlavor(flavorName);
    this.orders.push({ flavor, tableNumber });
  }

  serveOrders() {
    this.orders.forEach((order) => {
      order.flavor.serveCoffee(order.tableNumber);
    });
  }

  getTotalOrders() {
    return this.orders.length;
  }

  getTotalFlavorsAvailable() {
    return this.flavorFactory.getTotalFlavors();
  }
}

// Example usage:

const coffeeShop = new CoffeeShop();
coffeeShop.takeOrder("Cappuccino", 1);
coffeeShop.takeOrder("Espresso", 2);
coffeeShop.takeOrder("Cappuccino", 3);
coffeeShop.takeOrder("Latte", 4);
coffeeShop.takeOrder("Espresso", 5);

coffeeShop.serveOrders();

console.log(`Total orders: ${coffeeShop.getTotalOrders()}`);
console.log(
  `Total flavors available: ${coffeeShop.getTotalFlavorsAvailable()}`
);
