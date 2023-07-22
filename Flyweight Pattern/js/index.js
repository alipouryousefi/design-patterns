// Flyweight Factory
class CoffeeFlavorFactory {
    constructor() {
        this.flavors = {};
    }

    getFlavor(flavorName) {
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
    constructor(flavorName) {
        this.flavorName = flavorName;
    }

    serveCoffee(tableNumber) {
        console.log(`Serving ${this.flavorName} coffee to table #${tableNumber}`);
    }
}

// Client
class CoffeeShop {
    constructor() {
        this.orders = [];
        this.flavorFactory = new CoffeeFlavorFactory();
    }

    takeOrder(flavorName, tableNumber) {
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
console.log(`Total flavors available: ${coffeeShop.getTotalFlavorsAvailable()}`);
