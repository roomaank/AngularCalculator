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

  calculationPlace = '';
  resultPlace = '';
  digitFirst;
  digitSecond: number;
  operator = '';
  clipboard;


  constructor() { }

  ngOnInit(): void {
  }

  clickDigit(digit) {
    this.calculationPlace += digit;
    if (this.calculationPlace.length > 20) {
      this.calculationPlace = 'Invalid length'
      return;
    }
  }

  clickOperator(operator) {
    if (this.calculationPlace === '') {
      return;
    }
    this.digitFirst = parseFloat(this.calculationPlace)
    this.operator = operator;
    this.calculationPlace += operator;

    if (this.resultPlace) {    
      const buffer = this.resultPlace;
      this.calculationPlace = buffer;
      this.digitFirst = buffer;
    }
  }

  result() {
    //Як зробити щоб зчитувало з клавіатури???
    this.digitSecond = parseFloat(this.calculationPlace.split(this.operator)[1])
    console.log(this.digitSecond);
    if (this.operator === '×') {
      this.calculationPlace;            //Так нормально?Це не правильно поганого тону???
      this.resultPlace = (this.digitFirst * this.digitSecond).toString();
    } else if (this.operator === '÷') {
      this.calculationPlace;
      this.resultPlace = (this.digitFirst / this.digitSecond).toString();
    } else if (this.operator === '+') {
      this.calculationPlace;
      this.resultPlace = (this.digitFirst + this.digitSecond).toString();
    } else if (this.operator === '-') {
      this.calculationPlace;
      this.resultPlace = (this.digitFirst - this.digitSecond).toString();
    } else {
      this.resultPlace = 'Error';
    }

  }

  clearAll() {
    this.calculationPlace = '';
    this.resultPlace = '';
  }

}
