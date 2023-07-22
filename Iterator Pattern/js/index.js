// Iterator
class Iterator {
    constructor(collection) {
      this.collection = collection;
      this.index = 0;
    }
  
    next() {
      return this.collection[this.index++];
    }
  
    hasNext() {
      return this.index < this.collection.length;
    }
  }
  
  // Collection
  class NumbersCollection {
    constructor() {
      this.collection = [];
    }
  
    addNumber(number) {
      this.collection.push(number);
    }
  
    // Create and return an iterator for this collection
    createIterator() {
      return new Iterator(this.collection);
    }
  }
  
  // Example usage:
  
  const numbersCollection = new NumbersCollection();
  numbersCollection.addNumber(1);
  numbersCollection.addNumber(2);
  numbersCollection.addNumber(3);
  
  const iterator = numbersCollection.createIterator();
  
  while (iterator.hasNext()) {
    console.log(iterator.next());
  }
  