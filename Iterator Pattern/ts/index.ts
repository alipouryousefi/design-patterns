// Iterator
class Iterator<T> {
    private index: number = 0;
  
    constructor(private collection: T[]) {}
  
    next(): T {
      return this.collection[this.index++];
    }
  
    hasNext(): boolean {
      return this.index < this.collection.length;
    }
  }
  
  // Collection
  class NumbersCollection {
    private collection: number[] = [];
  
    addNumber(number: number) {
      this.collection.push(number);
    }
  
    // Create and return an iterator for this collection
    createIterator(): Iterator<number> {
      return new Iterator<number>(this.collection);
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
  