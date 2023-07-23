// Step 1: Create the Originator class.

class Originator {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }

  setState(state: string): void {
    this.state = state;
  }

  createMemento(): Memento {
    return new Memento(this.state);
  }

  restoreFromMemento(memento: Memento): void {
    this.state = memento.getState();
  }
}

// Step 2: Create the Memento class.

class Memento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }
}

// Step 3: Create the Caretaker class.

class Caretaker {
  private mementos: Memento[] = [];

  addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  getMemento(index: number): Memento {
    return this.mementos[index];
  }
}

// Example usage:

// Create an Originator with an initial state
const originator = new Originator("State 1");

// Create a Caretaker
const caretaker = new Caretaker();

// Save the initial state of the Originator
caretaker.addMemento(originator.createMemento());

// Change the state of the Originator
originator.setState("State 2");

// Save the new state
caretaker.addMemento(originator.createMemento());

// Change the state again
originator.setState("State 3");

// Restore the second state
originator.restoreFromMemento(caretaker.getMemento(1));

console.log(originator.getState()); // Output: "State 2"
