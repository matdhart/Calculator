
function Calculator(state, buttonName) {
    if (buttonName === 'C') {
      return {
        operator: null,
        base: null,
        operand: null,
      };
    }
    else if (buttonName === '=') {
      if (state.operator && state.operand) {
        return {
          orperator: null,
          base: compute(state.operator, state.base, state.operand),
          orperand: null,
        };
      }
      else {
        //State should not change unless all three attr. have values
        return {};
      }
    }
    else if (buttonName === '.') {
        //operand is always the latest number if it exists
        if (state.operand) {
          //silly goose you cant have more than 1 decimal point
          if (state.operand.includes('.')) {
            return {};
          }
          else {
            return { operand: state.operand + '.'};
          }//inner else
        }
        else {
          return {base: state.base + '.'};
        }
    }
    else if (isNum(buttonName)) {
      if (state.operator === null) {
          if (state.base) {
            return {base: state.base + buttonName};
          }
          else {
            return {base: buttonName};
          }
      }
      else {
        if (state.operand) {
          return {operand: state.operand + buttonName};
        }
        else {
          return {operand: buttonName}
        }
      }
    }
    //button is an operator
    else {
      if (state.operator === null) {
        return {operator: buttonName};
      }
      else {
        if (state.operand) {
          return {
            operator: buttonName,
//            base: compute(state.operator, state.base, state.operand),
            operand: null,
          };
        }
        else {
          return {operator: buttonName};
        }
      }
    }
}

//only works for single characters but ...
function isNum(questionable) {
  return '0' <= questionable && questionable <= '9';
}

function compute(operator, operand1, operand2) {
    const num1 = Number(operand1);
    const num2 = Number(operand2);
    switch (operator) {
      case '+': return (num1.valueOf() + num2.valueOf()).toString();
      case '-': return (num1.valueOf() - num2.valueOf()).toString();
      case 'x': return (num1.valueOf() * num2.valueOf()).toString();
      default:
        if (operand2 === '0') {
          return 0;
        }
        else {
          return (num1.valueOf() / num2.valueOf()).toString();
        }
    }
}


export default Calculator;
