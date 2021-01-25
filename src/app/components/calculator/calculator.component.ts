import { Component, OnInit } from '@angular/core';
import { DIGITS, OPERATIONS } from './calculator.constants';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  digits = DIGITS;
  operations = OPERATIONS;
  countArea = 0;
  resultArea = 0;

  constructor() { }

  ngOnInit(): void {
  }

  clickButton(digit) {
    console.log(digit);
    this.countArea = digit;
    
  }

  clearAll(){
  }

  result(){

  }

}
