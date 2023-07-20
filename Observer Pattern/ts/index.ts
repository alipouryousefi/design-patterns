// Subject (Observable)
class NewsPublisher {
    private observers: NewsSubscriber[] = [];
  
    addObserver(observer: NewsSubscriber) {
      this.observers.push(observer);
    }
  
    removeObserver(observer: NewsSubscriber) {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    notifyObservers(news: string) {
      this.observers.forEach((observer) => observer.update(news));
    }
  }
  
  // Observer
  class NewsSubscriber {
    constructor(private name: string) {}
  
    update(news: string) {
      console.log(`${this.name} received the news: ${news}`);
    }
  }
  
  // Example usage:
  const publisher = new NewsPublisher();
  const subscriber1 = new NewsSubscriber("Subscriber 1");
  const subscriber2 = new NewsSubscriber("Subscriber 2");
  
  publisher.addObserver(subscriber1);
  publisher.addObserver(subscriber2);
  
  publisher.notifyObservers("Breaking News: New Product Launch!");
  // Output:
  // Subscriber 1 received the news: Breaking News: New Product Launch!
  // Subscriber 2 received the news: Breaking News: New Product Launch!
  
  publisher.removeObserver(subscriber2);
  
  publisher.notifyObservers("Latest Update: Project Milestone Reached!");
  // Output:
  // Subscriber 1 received the news: Latest Update: Project Milestone Reached!
  