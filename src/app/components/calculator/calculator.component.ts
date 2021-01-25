import { Component, OnInit } from '@angular/core';
import { DIGITS, OPERATIONS } from './calculator.constants';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  calc = {
    firstDigit: null,
    secondDigit: null,
    operator: null,
    value: 0
  }

  digits = DIGITS;
  operations = OPERATIONS;
  countArea = '';
  resultArea = this.calc.value;

  constructor() { }

  ngOnInit(): void {
  }

  clickButton(digit) {
    console.log(digit);
    this.countArea += digit;
  }

  clickOperation(operation){
    console.log(operation);
    this.countArea += operation;
  }

  clearAll(){
  }

  result(){
    this.countArea = '0';
  }

}
