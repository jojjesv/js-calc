/**
 * Represents a simple to be calculation.
 * @author Johan Svensson
 */
class Calculation {
  /**
   * @param {string} operator 
   * @param {number} value 
   */
  constructor(operator, value) {
    this.operator = operator;
    this.value = value;
  }
}

/**
 * Calculates a set of Calculation instances.
 * @param {Calculation[]} a
 */
Calculation.process = (a) => {
  let val = 0;
  for (let calc of a) {
    switch (calc.operator) {
      case '+':
        val += calc.value;
        break;
      case '-':
        val -= calc.value;
        break;
      case '*':
        val *= calc.value;
        break;
      case '/':
        val /= calc.value;
        break;
    }
  }

  return val;
};

module.exports = Calculation;