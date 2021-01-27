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
  clipboard;
  currentValue;
  operator:null;

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
    if (!this.operator){
      this.currentDigit = value;
      // console.log('Current Digit: ', this.currentDigit);
    } else {
      //зробити додавання або іншу операцію буферу з поточним числом
      this.clipboard = this.currentDigit;
      console.log('Clipboard: ',this.clipboard);
      this.currentDigit = value;
      console.log('Current Digit: ', this.currentDigit);
      
      
      switch (this.operator){
        case '+':
          console.log('switch +');
          this.clipboard = this.clipboard + this.currentDigit;
          console.log('Clipboard: ', this.clipboard);
          this.resultLabel = this.clipboard;
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
