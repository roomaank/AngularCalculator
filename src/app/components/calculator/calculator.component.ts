import { Component, OnInit } from '@angular/core';
import { DIGITS } from './calculator.constants';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  digits = DIGITS;

  constructor() { }

  ngOnInit(): void {
  }

  clickDigit(e){
    console.log(e.target.innerText);
    
  }

}
