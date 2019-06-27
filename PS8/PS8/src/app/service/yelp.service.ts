import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YelpService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  };
  yelpEndpoint = 'http://localhost:3000/yelp/';

  getRestList(zip: string): Observable<string[]> {
    return this.httpClient.get<string[]>(this.yelpEndpoint + zip, this.httpOptions);
  }

  constructor(private httpClient: HttpClient) { }
}
