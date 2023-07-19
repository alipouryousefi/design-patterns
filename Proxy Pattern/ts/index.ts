// Expensive Database Operation
class Database {
    getData(): string {
      console.log('Fetching data from the database...');
      // Simulate some expensive database operation
      return 'Data from the database';
    }
  }
  
  // Proxy for Database
  class DatabaseProxy {
    private database: Database;
    private cachedData: string | null;
  
    constructor() {
      this.database = new Database();
      this.cachedData = null;
    }
  
    getData(): string {
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