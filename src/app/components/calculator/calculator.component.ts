import { Component, OnInit } from '@angular/core';
import { BUTTONS } from './calculator.constants';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  buttons = BUTTONS;
  resultLabel = '';
  firstDigit;
  secondDigit;
  clipboard;
  value = '';
  operator: null;

  constructor() { }

  ngOnInit(): void { }


  clickOnButton(button) {
    if (button.type === 'number') {
      this.numberClicked(button);
    } else if (button.appointment === 'operator'){
      this.operationClicked(button);
    }else if (button.value === '=') {
      this.resultClicked();
    } else {
      this.additionalFuncButtonsClicked(button);
    }
  }

  private numberClicked(button) {
    this.value = button.value;
    console.log('Value',this.value);
    if (!this.operator) {
      this.firstDigit = this.value;
    } else {
      console.log('First Digit: ', this.firstDigit);
      this.secondDigit = this.value;
      console.log('Second Digit: ', this.secondDigit);

      switch (this.operator) {
        case '+':
          this.clipboard = this.firstDigit + this.secondDigit;
          this.firstDigit = this.clipboard;
          break;
        case '-':
          this.clipboard = this.firstDigit - this.secondDigit
          this.firstDigit = this.clipboard;
          break;
        case '÷':
          this.clipboard = this.firstDigit / this.secondDigit;
          this.firstDigit = this.clipboard;
          break;
        case '×':
          this.clipboard = this.firstDigit * this.secondDigit
          this.firstDigit = this.clipboard;
          break;
        default:
          console.log('default switch');
      }
    }
    this.resultLabel = this.value

  }

  private operationClicked(button) {
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
  }

  additionalFuncButtonsClicked(button){
    if (button.event === 'clear') {
      this.resultLabel = ''
    } else if (button.event === 'subtract') {
      this.firstDigit = this.firstDigit * (-1)
      this.resultLabel = this.firstDigit;
    } else {
      console.log('This button has not event key in Object');
    }
  }


}
