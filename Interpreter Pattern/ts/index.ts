// Step 1: Define an abstract Expression class

abstract class Expression {
    abstract interpret(context: Record<string, number>): number;
  }
  
  // Step 2: Create concrete Expression classes for variables, addition, and subtraction
  
  class VariableExpression extends Expression {
    constructor(private name: string) {
      super();
    }
  
    interpret(context: Record<string, number>): number {
      return context[this.name];
    }
  }
  
  class AdditionExpression extends Expression {
    constructor(private left: Expression, private right: Expression) {
      super();
    }
  
    interpret(context: Record<string, number>): number {
      return this.left.interpret(context) + this.right.interpret(context);
    }
  }
  
  class SubtractionExpression extends Expression {
    constructor(private left: Expression, private right: Expression) {
      super();
    }
  
    interpret(context: Record<string, number>): number {
      return this.left.interpret(context) - this.right.interpret(context);
    }
  }
  
  // Step 3: Create a simple context object with variable values
  
  const context: Record<string, number> = {
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
  