const Singleton = (function () {
    let instance; // Private variable to hold the single instance
  
    // Private constructor to prevent direct instantiation
    function SingletonClass() {
      // Add any properties and methods you need for the Singleton class
    }
  
    // Public method to get the single instance
    function getInstance() {
      if (!instance) {
        instance = new SingletonClass();
      }
      return instance;
    }
  
    return {
      getInstance: getInstance,
    };
  })();


  const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); 