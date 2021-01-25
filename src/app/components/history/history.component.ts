import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calc } from 'src/app/models/calculator-data';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  historyArray: Calc[] = [];

  constructor(
    private route: Router,
    private historyService: HistoryService
  ) { }

  ngOnInit(): void {
    this.initHistoryArray();
  }

  private initHistoryArray() {
    this.historyService.getAllData()
      .subscribe((value) => {
        this.historyArray = value;
      })
  }

  navigateTo() {
    this.route.navigate([''])
  }

  deleteSingleHistory(id){
    this.historyService.deleteCalcData(id)
      .subscribe(() => {
        this.initHistoryArray();
      })
  }

}
