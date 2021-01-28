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
    } else {
      this.additionalFuncButtonsClicked(button);
    }
  }

  private numberClicked(button) {
    const buttonValue = Number(`${this.value || ''}` + button.value);

    if (!this.operator) {
      this.firstDigit = buttonValue;
      console.log('First Digit: ', this.firstDigit);
    } else {
      this.secondDigit = buttonValue;
      console.log('Second Digit: ', this.secondDigit);
    }
      switch (this.operator) {
        case '+':
          this.clipboard = this.firstDigit + this.secondDigit;
          console.log('Clipboard: ', this.clipboard);
          this.firstDigit = this.clipboard;
          break;
        case '-':
          this.clipboard = this.firstDigit - this.secondDigit;
          console.log('Clipboard: ', this.clipboard);
          this.firstDigit = this.clipboard;
          break;
        case '÷':
          this.clipboard = this.firstDigit / this.secondDigit;
          console.log('Clipboard: ', this.clipboard);
          this.firstDigit = this.clipboard;
          break;
        case '×':
          this.clipboard = this.firstDigit * this.secondDigit;
          console.log('Clipboard: ', this.clipboard);
          console.log('____');
          this.firstDigit = this.clipboard;
          break;
        default:
          console.log('default switch');
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

  }

  private resultClicked() {
    this.resultLabel = this.clipboard;
    console.log(this.resultLabel);

  }

  additionalFuncButtonsClicked(button) {
    if (button.event === 'clear') {
      this.resultLabel = '0'
      this.value = null;
      this.firstDigit = null;
      this.secondDigit = null;
      this.clipboard = null;
    } else if (button.event === 'subtract') {
      this.firstDigit = this.firstDigit * (-1)
      this.resultLabel = this.firstDigit;
    } else {
      console.log('This button has not event key in Object');
    }
  }


}
