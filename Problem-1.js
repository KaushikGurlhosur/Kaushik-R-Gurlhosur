class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  calculate() {
    switch (this.operation.toLowerCase()) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        return this.b !== 0 ? this.a / this.b : "Cannot divide by zero";
      default:
        return "Invalid operation";
    }
  }
}

// Example usage:
const calcMultiply = new Calculator(10.5, 2.5, "multiply");
const calcSubtract = new Calculator(10.5, 2, "subtract");
const calcAdd = new Calculator(10.5, 8.9, "add");
const calcDivide = new Calculator(10.5, 3.5, "divide");

console.log(
  `Result: Add - ${calcMultiply.calculate()} || Subtract - ${calcSubtract.calculate()} || Divide - ${calcDivide.calculate()} || Multiply - ${calcMultiply.calculate()}`
);
