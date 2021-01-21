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
  countArea;

  constructor() { }

  ngOnInit(): void {
  }

  clickDigit(digit) {
    console.log(digit);
    this.countArea = digit;
  }

}
