import { Component, OnInit } from '@angular/core';
import { DIGITS, OPERATIONS } from './calculator.constants';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  digits = DIGITS;
  operators = OPERATIONS;
  countArea = '';
  resultArea = '';
  digitFirst: number;
  digitSecond: number;
  resultConvertedToString = ''
  operator = '';

  constructor() { }

  ngOnInit(): void {
  }

  clickButton(digit) {
    this.countArea += digit;
  }

  clickOperation(operator){
    this.countArea += operator;
    this.operator = operator;
  }

  result(){
    if (this.operator === '*'){
      this.countArea = (this.digitFirst * this.digitSecond).toString()
    }
    console.log(this.countArea);
    
  }

  clearAll(){
    this.countArea = '';
    this.resultArea = '';
  }

}
