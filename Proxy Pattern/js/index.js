// Expensive Database Operation
class Database {
    getData() {
      console.log('Fetching data from the database...');
      // Simulate some expensive database operation
      return 'Data from the database';
    }
  }
  
  // Proxy for Database
  class DatabaseProxy {
    constructor() {
      this.database = new Database();
      this.cachedData = null;
    }
  
    getData() {
      if (!this.cachedData) {
        this.cachedData = this.database.getData();
      }
      return this.cachedData;
    }
  }
  
  // Client code
  const databaseProxy = new DatabaseProxy();
  
  console.log(databaseProxy.getData()); // Output: Fetching data from the database... Data from the database
  console.log(databaseProxy.getData()); // Output: Data from the database (Cached result, no fetching)
  