import * as uuid from 'uuid';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DIGITS, OPERATIONS } from './calculator.constants';
import { HistoryService } from 'src/app/services/history.service';
import { Calc } from 'src/app/models/calculator-data';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  historyData: Calc;
  digits = DIGITS;
  operators = OPERATIONS;

  calculationPlace = '';
  resultPlace = '';
  digitFirst: number;
  digitSecond: number;
  operator = '';
  clipboard:number;
  activateHistory: boolean;

  constructor(
    private router: Router,
    private historyService: HistoryService
  ) { }

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
      this.calculationPlace = this.resultPlace;
      this.resultPlace = ''
    }

  }


  result() {
    this.digitSecond = parseFloat(this.calculationPlace.split(this.operator)[1])
    if (this.operator === '×') {
      this.calculationPlace;
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

    this.activateHistory = true;
    const resultData = {
      id: uuid.v4(),
      calculate: this.calculationPlace,
      result: this.resultPlace
    }
    this.historyService.addCalcData(resultData).subscribe((value) => {
      this.historyData = value;
    })
    
  }

  clearAll() {
    this.calculationPlace = '';
    this.resultPlace = '';
    this.activateHistory = false;
  }

  subtractSignBeforeDigit(){
    this.digitFirst = parseFloat(this.calculationPlace)
    const subtractDigit = this.digitFirst * (-1);
    this.calculationPlace = ''
    this.resultPlace = subtractDigit.toString()            
  }

  percentOfNumber(){
    this.digitFirst = parseFloat(this.calculationPlace)
    const percentDigit = this.digitFirst / 100;
    this.calculationPlace = ''
    this.resultPlace = percentDigit.toString();    

  }

  navigateTo() {
    this.router.navigate(['history'])
  }

}
