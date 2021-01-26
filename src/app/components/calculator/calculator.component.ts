import { Component, OnInit } from '@angular/core';
import { BUTTONS } from './calculator.constants';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  buttons = BUTTONS;

  constructor(
  ) { }

  ngOnInit(): void {
  }


}
