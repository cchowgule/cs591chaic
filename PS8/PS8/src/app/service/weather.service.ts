import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LOC} from '../model/locationModel';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  };
  weatherEndpoint = 'http://localhost:3000/weather/';

  getWeather(zip: string): Observable<LOC> {
    return this.httpClient.get<LOC>(this.weatherEndpoint + zip, this.httpOptions);
  }

  constructor(private httpClient: HttpClient) { }
}
