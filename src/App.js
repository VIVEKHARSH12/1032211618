import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      firstOperand: '',
      operator: null,
      waitingForSecondOperand: false,
    };
  }

  handleDigitClick = (digit) => {
    const { display, waitingForSecondOperand } = this.state;

    if (waitingForSecondOperand) {
      this.setState({
        display: digit,
        waitingForSecondOperand: false,
      });
    } else {
      this.setState({
        display: display === '0' ? digit : display + digit,
      });
    }
  };

  handleOperatorClick = (operator) => {
    const { display, firstOperand } = this.state;

    this.setState({
      operator,
      firstOperand: display,
      waitingForSecondOperand: true,
    });
  };

  handleEqualsClick = () => {
    const { display, firstOperand, operator } = this.state;
    const secondOperand = display;

    if (operator === '+') {
      this.setState({
        display: (parseFloat(firstOperand) + parseFloat(secondOperand)).toString(),
        operator: null,
        waitingForSecondOperand: false,
      });
    } else if (operator === '-') {
      this.setState({
        display: (parseFloat(firstOperand) - parseFloat(secondOperand)).toString(),
        operator: null,
        waitingForSecondOperand: false,
      });
    } else if (operator === '*') {
      this.setState({
        display: (parseFloat(firstOperand) * parseFloat(secondOperand)).toString(),
        operator: null,
        waitingForSecondOperand: false,
      });
    } else if (operator === '/') {
      this.setState({
        display: (parseFloat(firstOperand) / parseFloat(secondOperand)).toString(),
        operator: null,
        waitingForSecondOperand: false,
      });
    }
  };

  handleClearClick = () => {
    this.setState({
      display: '0',
      firstOperand: '',
      operator: null,
      waitingForSecondOperand: false,
    });
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <button onClick={() => this.handleDigitClick('7')}>7</button>
          <button onClick={() => this.handleDigitClick('8')}>8</button>
          <button onClick={() => this.handleDigitClick('9')}>9</button>
          <button onClick={() => this.handleOperatorClick('+')}>+</button>
          <button onClick={() => this.handleDigitClick('4')}>4</button>
          <button onClick={() => this.handleDigitClick('5')}>5</button>
          <button onClick={() => this.handleDigitClick('6')}>6</button>
          <button onClick={() => this.handleOperatorClick('-')}>-</button>
          <button onClick={() => this.handleDigitClick('1')}>1</button>
          <button onClick={() => this.handleDigitClick('2')}>2</button>
          <button onClick={() => this.handleDigitClick('3')}>3</button>
          <button onClick={() => this.handleOperatorClick('*')}>*</button>
          <button onClick={() => this.handleDigitClick('0')}>0</button>
          <button onClick={() => this.handleClearClick()}>C</button>
          <button onClick={() => this.handleEqualsClick()}>=</button>
          <button onClick={() => this.handleOperatorClick('/')}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
