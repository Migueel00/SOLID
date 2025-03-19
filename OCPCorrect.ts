abstract class Operation {
  public abstract execute(a: number, b: number) : number;
}

class Add extends Operation {
  public execute(a: number, b: number): number {
    return a + b;
  }
}

class Substract extends Operation {
  public execute(a: number, b: number): number {
    return a - b;
  }
}

class Multiply extends Operation {
  public execute(a: number, b: number): number {
    return a * b;
  }
}

class Divide extends Operation {
  public execute(a: number, b: number): number {
    return a / b;
  }
}

interface OperationService{
  name: string;
  execute(a: number, b: number): number;
}

class Calculator {
  private operations: OperationService[];

  constructor() {
    this.operations = [];
  }

  public addOperation(operation: OperationService) {
    this.operations.push(operation);
  }

  public calculate(a: number, b: number, operation_name: string) : number {
    const operation = this.operations.find(op => op.name === operation_name);
    if (operation) {
      return operation.execute(a, b);
    }
    throw new Error('Operation not found');
  }
}

const calculator = new Calculator();
calculator.addOperation({name: 'Add', execute: new Add().execute});
calculator.addOperation({name: 'Substract', execute: new Substract().execute});
calculator.addOperation({name: 'Multiply', execute: new Multiply().execute});
calculator.addOperation({name: 'Divide', execute: new Divide().execute});


console.log(calculator.calculate(1, 3, 'Add'));
console.log(calculator.calculate(9, 1, 'Substract'));
console.log(calculator.calculate(3, 2, 'Multiply'));
console.log(calculator.calculate(4, 2, 'Divide'));

console.log(calculator.calculate(1, 2, 'Addd')); // Error: Operation not found


// Can add new operations without changing the Calculator class