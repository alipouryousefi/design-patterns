// Context - Traffic Light
class TrafficLight {
    constructor() {
      this.state = new RedState(this);
    }
  
    changeState(state) {
      this.state = state;
    }
  
    go() {
      this.state.go();
    }
  }
  
  // State Interface
  class TrafficLightState {
    constructor(context) {
      this.context = context;
    }
  
    go() {}
  }
  
  // Concrete States
  class RedState extends TrafficLightState {
    go() {
      console.log("Traffic Light: Red -> Stop!");
      this.context.changeState(new GreenState(this.context));
    }
  }
  
  class GreenState extends TrafficLightState {
    go() {
      console.log("Traffic Light: Green -> Go!");
      this.context.changeState(new YellowState(this.context));
    }
  }
  
  class YellowState extends TrafficLightState {
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
  