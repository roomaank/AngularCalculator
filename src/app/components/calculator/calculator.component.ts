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
      console.log('Current Digit: ', this.currentDigit);
      this.secondDigit = value;
      console.log('Second Digit: ', this.secondDigit);

      switch (this.operator) {
        case '+':
          this.clipboard = this.currentDigit + this.secondDigit;
          console.log('Clipboard: ', this.clipboard);
          this.currentDigit = this.clipboard;
          console.log('current digit after clipboard: ', this.currentDigit);
          break;
        case '-':
          this.clipboard = this.currentDigit - this.secondDigit
          console.log('Clipboard: ', this.clipboard);
          this.currentDigit = this.clipboard;
          console.log('current digit after clipboard: ', this.currentDigit);
          break;
        case '÷':
          this.clipboard = this.currentDigit / this.secondDigit;
          console.log('Clipboard: ', this.clipboard);
          this.currentDigit = this.clipboard;
          console.log('current digit after clipboard: ', this.currentDigit);
          break;
        case '×':
          this.clipboard = this.currentDigit * this.secondDigit
          console.log('Clipboard: ', this.clipboard);
          this.currentDigit = this.clipboard;
          console.log('current digit after clipboard: ', this.currentDigit);
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

    if (this.clipboard){
      this.resultLabel = this.clipboard
    }

    if(button.event === 'clear'){
      console.log('CLEAR');
      this.resultLabel = ''
    } else if (button.event === 'subtract'){
      this.currentDigit = this.currentDigit * (-1)
      this.resultLabel = this.currentDigit;      
    } else if (button.event === 'percent'){
      // this.currentDigit = this.currentDigit / 100
      // this.resultLabel = this.currentDigit;

      if (this.secondDigit){
        console.log('123123123');
        console.log(this.currentDigit);
        console.log(this.secondDigit);
      }           
    } else {
      console.log('This button has not event key in Object');
    }

  }

  private resultClicked() {
    this.resultLabel = this.clipboard;
  }



}
