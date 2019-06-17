import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PRICE} from '../models/priceModel';

@Injectable({
  providedIn: 'root'
})
export class PriceAsyncService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  };
  pricesEndpoint = 'http://localhost:3000/ps4/';

  getDefualtPrice(): Observable<PRICE[]> {
    return this.httpClient.get<PRICE[]>(this.pricesEndpoint, this.httpOptions);
  }

  getPrices(newDays: number): Observable<PRICE[]> {
    return this.httpClient.get<PRICE[]>(this.pricesEndpoint + newDays.toString(), this.httpOptions);
  }

  constructor(private httpClient: HttpClient) { }
}
