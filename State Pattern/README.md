# State Pattern

The State Pattern is a behavioral design pattern that allows an object to change its behavior when its internal state changes. It helps manage state-specific logic by representing different states as separate classes and delegating the behavior to the current state. This pattern promotes the "Open/Closed Principle" because it allows adding new states without modifying existing code.

In both implementations, we have a TrafficLight class representing the context, which can change its state. The TrafficLightState interface represents the state, and each concrete state (RedState, GreenState, and YellowState) implements the go() method differently, which represents the behavior of the traffic light in that state.

When trafficLight.go() is called, the context delegates the go() method to the current state, changing its behavior accordingly.

The State Pattern allows us to manage complex state-specific logic in a clear and organized manner, making it easy to add new states or modify existing behavior without altering the context class.