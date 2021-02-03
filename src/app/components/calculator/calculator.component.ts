import { Component, HostListener, OnInit } from '@angular/core';
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

  isTyped: boolean;
  changedColor: boolean;
  divideError: boolean;
  
  constructor() { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const button = this.buttons.find(btn => btn.value.toString() === event.key);
    
    if (!button) {
      return;
    }
    this.clickOnButton(button);
  }

  ngOnInit(): void { }

  clickOnButton(button) {
    if (button.type === 'number') {
      this.numberClicked(button);
    } else if (button.appointment === 'operator') {
      this.operationClicked(button);
    } else if (button.value === '=') {
      this.resultClicked();
    } else if (button.event === 'subtract') {
      this.subtractCurrentDigit();
    } else if (button.event === 'percent') {
      this.percentOfDigit();
    } else {
      this.dotClicked(button)
    }
  }

  private numberClicked(button) {
    const buttonValue = Number(`${this.value || ''}` + button.value);

    if (!this.operator) {
      this.firstDigit = buttonValue;
      console.log(this.firstDigit);
    } else {
      switch (this.operator) {
        case '+':
            this.secondDigit = buttonValue;
            console.log(this.secondDigit);
            this.clipboard = this.firstDigit + this.secondDigit;
          break;
        case '-':
            this.secondDigit = buttonValue;
            console.log(this.secondDigit);
            this.clipboard = this.firstDigit - this.secondDigit;
          break;
        case '÷':
            this.secondDigit = buttonValue
            console.log(this.secondDigit);
            this.clipboard = this.firstDigit / this.secondDigit;
            if (this.secondDigit === 0){
              console.log('error');
              this.resultLabel = 'be divided by zero'
            }
          break;
        case '×':
            this.secondDigit = buttonValue
            console.log(this.secondDigit);
            this.clipboard = this.firstDigit * this.secondDigit;
          break;
        default:
          console.log('default switch');
      }
    }
    this.isTyped = true
    this.value = buttonValue;
    this.resultLabel = this.value;
  }

  private operationClicked(button) {
    this.value = null
    const operator = button.value
    this.operator = operator;
    
    if (this.resultLabel === '') {
      return;
    }

    if (this.clipboard) {
      this.resultLabel = this.clipboard
    }

    if (this.clipboard) {
      this.firstDigit = this.clipboard
    }

  }

  private resultClicked() {
    this.resultLabel = this.clipboard;
    console.log(this.firstDigit);
    console.log(this.secondDigit);
    console.log(this.clipboard);
    if (this.secondDigit === 0){
      this.resultLabel = `Can't be divided by zero`
      return;
    }
  }

  private subtractCurrentDigit() {
    if (this.firstDigit) {
      this.firstDigit = this.firstDigit * (-1);
      this.resultLabel = this.firstDigit;
      if (this.operator) {
      }
    }
  }

  private percentOfDigit() {
    if (this.clipboard) {
      const percentOfFirstDigit = this.firstDigit / 100;
      const percentOfSecondDigit = this.secondDigit / 100;
      const percentOfMultipliedDigits = ((percentOfFirstDigit * percentOfSecondDigit) * 100).toFixed(2); //Чи не норм практика юзати toFixed()?
      this.resultLabel = percentOfMultipliedDigits;
    } else if (this.firstDigit) {
      this.firstDigit = this.firstDigit / 100
      this.resultLabel = this.firstDigit
    }
  }

  private dotClicked(button) {
    const dot = button.value;
    console.log(dot);
  }

  clearAll() {
    console.log('value', this.value);
    console.log('firstDigit', this.firstDigit);
    console.log('secondDigit', this.secondDigit);
    console.log('clipboard', this.clipboard);
    console.log('_____________________________');
    this.resultLabel = '0'
    this.isTyped = false
    this.value = null;
    this.firstDigit = null;
    this.secondDigit = null;
    this.clipboard = null;
    console.log('value', this.value);
    console.log('firstDigit', this.firstDigit);
    console.log('secondDigit', this.secondDigit);
    console.log('clipboard', this.clipboard);
  }

  changeColor() {
    this.changedColor = !this.changedColor;
  }


}
