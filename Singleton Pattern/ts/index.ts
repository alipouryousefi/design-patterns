
//step 1

class Singleton {
  private static instance: Singleton | null = null;

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // Add any other methods and properties you need for the Singleton class
}

//step 2

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2);
