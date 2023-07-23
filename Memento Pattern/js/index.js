// Step 1: Create the Originator class

class Originator {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }

    createMemento() {
        return new Memento(this.state);
    }

    restoreFromMemento(memento) {
        this.state = memento.getState();
    }
}

// Step 2: Create the Memento class.

class Memento {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}


// Step 3: Create the Caretaker class.

class Caretaker {
    constructor() {
        this.mementos = [];
    }

    addMemento(memento) {
        this.mementos.push(memento);
    }

    getMemento(index) {
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




