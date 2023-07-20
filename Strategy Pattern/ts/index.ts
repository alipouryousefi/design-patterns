// Strategy Interface
interface PaymentStrategy {
    pay(amount: number): void;
  }
  
  // Concrete Strategies
  class CreditCardPayment implements PaymentStrategy {
    pay(amount: number) {
      console.log(`Paid $${amount} with credit card.`);
    }
  }
  
  class PayPalPayment implements PaymentStrategy {
    pay(amount: number) {
      console.log(`Paid $${amount} with PayPal.`);
    }
  }
  
  // Context
  class ShoppingCart {
    private items: { name: string; price: number }[] = [];
  
    constructor(private paymentStrategy: PaymentStrategy) {}
  
    addItem(item: { name: string; price: number }) {
      this.items.push(item);
    }
  
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.price, 0);
    }
  
    checkout() {
      const totalAmount = this.getTotalPrice();
      this.paymentStrategy.pay(totalAmount);
    }
  }
  
  // Example usage:
  const creditCardPayment = new CreditCardPayment();
  const payPalPayment = new PayPalPayment();
  
  const cart1 = new ShoppingCart(creditCardPayment);
  cart1.addItem({ name: "Item 1", price: 20 });
  cart1.addItem({ name: "Item 2", price: 30 });
  cart1.checkout();
  // Output: Paid $50 with credit card.
  
  const cart2 = new ShoppingCart(payPalPayment);
  cart2.addItem({ name: "Item 3", price: 25 });
  cart2.addItem({ name: "Item 4", price: 15 });
  cart2.checkout();
  // Output: Paid $40 with PayPal.