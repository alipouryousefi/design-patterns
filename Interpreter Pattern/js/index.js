// Step 1: Define an abstract Expression class

class Expression {
    interpret(context) {
      throw new Error('interpret method must be implemented');
    }
  }
  
  // Step 2: Create concrete Expression classes for variables, addition, and subtraction
  
  class VariableExpression extends Expression {
    constructor(name) {
      super();
      this.name = name;
    }
  
    interpret(context) {
      return context[this.name];
    }
  }
  
  class AdditionExpression extends Expression {
    constructor(left, right) {
      super();
      this.left = left;
      this.right = right;
    }
  
    interpret(context) {
      return this.left.interpret(context) + this.right.interpret(context);
    }
  }
  
  class SubtractionExpression extends Expression {
    constructor(left, right) {
      super();
      this.left = left;
      this.right = right;
    }
  
    interpret(context) {
      return this.left.interpret(context) - this.right.interpret(context);
    }
  }
  
  // Step 3: Create a simple context object with variable values
  
  const context = {
    x: 10,
    y: 5,
  };
  
  // Step 4: Create an interpreter and evaluate an expression
  
  const expression = new AdditionExpression(
    new VariableExpression('x'),
    new SubtractionExpression(
      new VariableExpression('y'),
      new VariableExpression('x')
    )
  );
  
  const result = expression.interpret(context);
  console.log(result); // Output: 5 (10 + (5 - 10) = 5)
  