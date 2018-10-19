const Calculator = require('./Calculator');

class CalculatorInputParser {
  constructor() {
    this.previousInput = '';
  }

  /**
   * Parses a string and performs calculator operations.
   * @param {string} input Input to parse.
   * @param {Calculator} calc Calculator instance to act upon.
   * @returns {string} Result of the parse
   */
  parse(input, calc) {
    if (!isNaN(input)) {
      //  Previous input was not an operator.
      calc.concatInputNumber(input);
    } else {
      if (!this.performOperator(input, 0, calc)) {
        return "Invalid input: " + input;
      }
    }

    this.previousInput = input;

    return calc.value.toString();
  };

  /**
   * Performs an operation on a calculator instance.
   * @private
   * @param {string} operator
   * @param {number} input
   * @param {Calculator} calc
   * @returns {boolean} Whether the operator was valid.
   */
  performOperator(operator, input, calc) {
    switch (operator) {
      case '+':
        calc.add(input);
        return true;
      case '-':
        calc.sub(input);
        return true;
      case '*':
        calc.mul(input);
        return true;
      case '/':
        calc.div(input);
        return true;
      case '=':
        calc.equals();
        return true;
      case 'ce':
        calc.reset();
        return true;
    }
    return false;
  }
}

module.exports = CalculatorInputParser;