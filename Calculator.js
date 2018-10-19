const Calculation = require('./Calculation');

class Calculator {

  constructor() {
    this.reset();
  }

  get value() {
    return this._value;
  }

  /**
   * Concats a number to the last calculation to form a new number.
   * @param {number} num 
   */
  concatInputNumber(num) {
    this._value = Number(this._value.toString() + num.toString());

    let { calculations } = this;
    calculations[calculations.length - 1].value = this._value;
  }

  /**
   * Makes the next calculation perform addition.
   * @returns {Calculator} This for chaining.
   */
  add() {
    this.pushCalculation('+');
    return this;
  }

  /**
   * Makes the next calculation perform subtraction.
   * @returns {Calculator} This for chaining.
   */
  sub() {
    this.pushCalculation('-');
    return this;
  }

  /**
   * Makes the next calculation perform multiplication.
   * @returns {Calculator} This for chaining.
   */
  mul() {
    this.pushCalculation('*');
    return this;
  }

  /**
   * Makes the next calculation perform division.
   * @returns {Calculator} This for chaining.
   */
  div() {
    this.pushCalculation('/');
    return this;
  }

  /**
   * @private
   */
  pushCalculation(operator, initialNum = 0) {
    this.calculations.push(new Calculation(operator, initialNum));
    this._value = 0;
  }

  /**
   * Applies and returns the value of the operations.
   * @returns {number}
   */
  equals() {
    this._value = Calculation.process(this.calculations);

    return this._value;
  }

  /**
   * Resets all calculations.
   */
  reset() {
    this._value = 0;
    
    /**
     * Calculations before equals. Starts of with a operatorless calculation.
     * @type {Calculation[]}
     */
    this.calculations = [new Calculation('+', 0)];
  }
}

module.exports = Calculator;