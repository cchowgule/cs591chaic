import { Component } from '@angular/core';
import {prices} from './prices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gold Prices';
  prices = prices;
}
