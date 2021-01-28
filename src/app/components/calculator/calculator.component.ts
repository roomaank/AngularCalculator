import { Component, OnInit } from '@angular/core';
import { BUTTONS } from './calculator.constants';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  buttons = BUTTONS;
  resultLabel = '0';
  firstDigit;
  secondDigit;
  clipboard;
  value;
  operator: null;

  constructor() { }

  ngOnInit(): void { }


  clickOnButton(button) {
    if (button.type === 'number') {
      this.numberClicked(button);
    } else if (button.appointment === 'operator') {
      this.operationClicked(button);
    } else if (button.value === '=') {
      this.resultClicked();
    } else if (button.event === 'clear') {
      this.clearAll();
    } else if (button.event === 'subtract') {
      this.subtractCurrentDigit();
    } else if (button.event === 'percent') {
      this.percentOfDigit();
    } else {
      console.log('else');
    }

  }

  private numberClicked(button) {
    const buttonValue = Number(`${this.value || ''}` + button.value);

    if (!this.operator) {
      this.firstDigit = buttonValue;
    } else {

      switch (this.operator) {
        case '+':
          if (this.operator) {
            this.secondDigit = buttonValue;
            console.log('First Digit: ', this.firstDigit, this.operator, 'Second Digit: ', this.secondDigit);
            this.clipboard = this.firstDigit + this.secondDigit;
            console.log('Clipboard: ', this.clipboard);
          }
          break;
        case '-':
          if (this.operator) {
            this.secondDigit = buttonValue;
            this.clipboard = this.firstDigit - this.secondDigit;
          }
          break;
        case '÷':
          if (this.operator) {
            this.secondDigit = buttonValue
            this.clipboard = this.firstDigit / this.secondDigit;
          }
          break;
        case '×':
          if (this.operator) {
            this.secondDigit = buttonValue
            this.clipboard = this.firstDigit * this.secondDigit;
          }
          break;
        default:
          console.log('default switch');
      }
    }
    this.value = buttonValue;
    this.resultLabel = this.value;
  }

  private operationClicked(button) {
    this.value = null
    this.operator = button.value
    if (this.resultLabel === '') {
      return;
    }

    if (this.clipboard) {
      this.resultLabel = this.clipboard
    }

    if (this.clipboard) {
      this.firstDigit = this.clipboard
      console.log('!@#!@#!@#');
    }

  }

  private resultClicked() {
    this.resultLabel = this.clipboard;
    console.log(this.resultLabel);

  }

  private clearAll() {
    this.resultLabel = '0'
    this.value = null;
    this.firstDigit = null;
    this.secondDigit = null;
    this.clipboard = null;
  }

  private subtractCurrentDigit() {
    if (this.firstDigit) {
      this.firstDigit = this.firstDigit * (-1);
      this.resultLabel = this.firstDigit;
      if (this.operator) {
        console.log('!_!_!_!_!_!');
      }
    }

  }

  private percentOfDigit() {
    console.log('percent of digit');

  }



}
