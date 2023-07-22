# Iterator Pattern


The Iterator Pattern is a behavioral design pattern that provides a way to access elements of a collection sequentially without exposing the underlying representation of the collection. It allows you to traverse through the elements of a collection one by one, without needing to know how the collection is implemented.

In JavaScript and TypeScript, the Iterator Pattern is commonly implemented using an object that provides methods for accessing elements in a collection. These methods include:

1. next(): Returns the next element in the collection and advances the iterator to the next position.

2. hasNext(): Checks if there are more elements in the collection.

In both implementations, we have an Iterator class that provides the next() and hasNext() methods for accessing elements in a collection. The NumbersCollection class represents the collection, and it has a createIterator() method that returns an iterator for the collection. The client code can use the iterator to traverse through the elements of the collection without knowing its internal representation. This encapsulation provides flexibility and separation of concerns between the collection and the iterator.