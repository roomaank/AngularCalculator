import { Component, OnInit } from '@angular/core';
import { BUTTONS } from './calculator.constants';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  buttons = BUTTONS;
  topLabel = '';
  resultLabel = '';
  currentDigit;
  secondDigit;
  clipboard;
  operator: null;

  constructor(
  ) { }

  ngOnInit(): void {
  }


  clickOnButton(button) {
    if (button.type === 'number') {
      this.numberClicked(button);
    } else if (button.value === '=') {
      this.resultClicked();
    } else {
      this.operationClicked(button);
    }
  }

  private numberClicked(button) {
    const value = button.value;
    if (!this.operator) {
      this.currentDigit = value;
    } else {
      console.log('*****************************************************');
      console.log('Current Digit: ', this.currentDigit);
      this.secondDigit = value;
      console.log('Second Digit: ', this.secondDigit);

      switch (this.operator) {
        case '+':
          console.log('switch +');
          this.clipboard = this.currentDigit + this.secondDigit;
          console.log('Clipboard: ', this.clipboard);
          this.currentDigit = this.clipboard;
          console.log('_________');
          console.log('Current digit after operation: ', this.currentDigit);
          console.log('*****************************************************');
          break;
        case '-':
          console.log('switch -');
          break;
        case '÷':
          console.log('switch ÷');
          break;
        case '×':
          console.log('switch ×');
          break;
        default:
          console.log('default switch');
      }
    }
    this.resultLabel = value

  }

  private operationClicked(button) {
    this.operator = button.value
    if (this.resultLabel === '') {
      return;
    }

    // switch (this.operator){
    //   case '+':
    //     console.log('switch +');
    //     break;
    //   case '-':
    //     console.log('switch -');
    //     break;
    //   case '÷':
    //     console.log('switch ÷');
    //       break;
    //   case '×':
    //     console.log('switch ×');
    //     break;
    //   default:
    //     console.log('default switch');
    // }

  }

  private resultClicked() {
    console.log('result');
    //TODO
  }



}
