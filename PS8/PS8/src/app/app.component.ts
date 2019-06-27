import { Component } from '@angular/core';
import {WeatherService} from './service/weather.service';
import {YelpService} from './service/yelp.service';
import {LOC} from './model/locationModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS8';
  loc: LOC;
  zip: string;

  getWeather(): void {
    const newZip: string = this.zip;
    this.weather.getWeather(newZip)
      .subscribe(loc => {
        this.loc = loc;
        if (loc.restList.length !== 0) {
          loc.showList = true;
        }
      });
  }

  getRestList(): void {
    const currentZip: string = this.zip;
    this.yelp.getRestList(currentZip)
      .subscribe(restList => {
        this.loc.restList = restList;
        this.loc.showList = true;
      });
  }

  constructor(private weather: WeatherService, private yelp: YelpService) { }

}
