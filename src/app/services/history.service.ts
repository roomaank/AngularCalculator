import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calc } from '../models/calculator-data';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllData(): Observable<Calc[]> {
    return this.httpClient.get<Calc[]>('http://localhost:3000/calculator');
  }

  addCalcData(newData): Observable<Calc> {
    return this.httpClient.post<Calc>('http://localhost:3000/calculator', newData)
  }

  deleteCalcData(id: string): Observable<{}> {
    return this.httpClient.delete(`http://localhost:3000/calculator/${id}`)
  }

}
