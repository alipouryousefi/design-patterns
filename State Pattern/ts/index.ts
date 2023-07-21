// Context - Traffic Light
class TrafficLight {
    private state: TrafficLightState;
  
    constructor() {
      this.state = new RedState(this);
    }
  
    changeState(state: TrafficLightState) {
      this.state = state;
    }
  
    go() {
      this.state.go();
    }
  }
  
  // State Interface
  interface TrafficLightState {
    go(): void;
  }
  
  // Concrete States
  class RedState implements TrafficLightState {
    constructor(private context: TrafficLight) {}
  
    go() {
      console.log("Traffic Light: Red -> Stop!");
      this.context.changeState(new GreenState(this.context));
    }
  }
  
  class GreenState implements TrafficLightState {
    constructor(private context: TrafficLight) {}
  
    go() {
      console.log("Traffic Light: Green -> Go!");
      this.context.changeState(new YellowState(this.context));
    }
  }
  
  class YellowState implements TrafficLightState {
    constructor(private context: TrafficLight) {}
  
    go() {
      console.log("Traffic Light: Yellow -> Prepare to stop!");
      this.context.changeState(new RedState(this.context));
    }
  }
  
  // Example Usage
  const trafficLight = new TrafficLight();
  trafficLight.go(); // Output: Traffic Light: Red -> Stop!
  trafficLight.go(); // Output: Traffic Light: Green -> Go!
  trafficLight.go(); // Output: Traffic Light: Yellow -> Prepare to stop!
  trafficLight.go(); // Output: Traffic Light: Red -> Stop!
  