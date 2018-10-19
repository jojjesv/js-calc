const readline = require('readline');
const Calculator = require('./Calculator');
const CalculatorInputParser = require('./CalculatorInputParser');

/**
 * Handles input for the calculator.
 * @author Johan Svensson
 */
class CalculatorInput {
  /**
   * @param {Calculator} calc 
   */
  constructor(calc) {
    this.calc = calc;
    this.parser = new CalculatorInputParser();
    this.readlineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  /**
   * Makes this calculator steal input for processing operators and other input.
   */
  giveControl() {
    this.next(null)
  }

  /**
   * 
   * @param {string} query Optional, previously passed input for recursive purposes.
   */
  next(input = null) {
    if (typeof input == "string") {
      console.log("Calculator says: " + this.parser.parse(input, this.calc));
    }
    this.readlineInterface.question("", s => {
      this.next(s);
    });
  }
}

module.exports = CalculatorInput;