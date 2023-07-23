# Memento Pattern

The Memento Pattern is a behavioral design pattern that allows an object's state to be captured (saved) and restored (reverted) without exposing its internal details. This pattern is useful when you need to implement undo/redo functionality or create snapshots of an object's state.

In the Memento Pattern, we have three main components:

1. Originator: The object whose state we want to save and restore.

2. Memento: The object that stores the state of the Originator. It provides a way to access the Originator's state but prevents other objects from modifying it directly.

3. Caretaker: The object that holds the Memento and is responsible for managing and applying the saved states of the Originator.


In the example, we created an Originator with an initial state, and then we used the Memento Pattern to save its state at different points in time using the Caretaker. Later, we restored the Originator's state to a previous version using the Memento object stored in the Caretaker.