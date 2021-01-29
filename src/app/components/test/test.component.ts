import { Component, HostListener, OnInit } from '@angular/core';
import { BUTONS } from './test.constants';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  ESC = 27
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  buttons = BUTONS;
  count = 1;
  button;

  constructor() { }

  ngOnInit(): void {
    for (let button of this.buttons){
      this.button = button;
      console.log(this.button);
      console.log(this.button.key);
      
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    
    switch (event.keyCode) {
      case KEY_CODE.RIGHT_ARROW:
        this.increment();
        break;
      case KEY_CODE.LEFT_ARROW:
        this.decrement();
        break;
      case KEY_CODE.ESC:
        this.resetCount();
        break;
    }
  }

  decrement() {
    if (this.count <= 1) {
      return
    }
    this.count--;
  }

  increment() {
    this.count++;
  }

  resetCount(){
    this.count = 1;
  }


}
