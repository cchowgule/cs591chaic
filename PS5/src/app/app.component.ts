import { Component } from '@angular/core';
import {Prices} from './prices';
import {pricesMock} from './prices_mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gold Prices';
  prices = pricesMock;
  private selectedPrice: Prices;

  selectPrice(price: Prices) {
    this.selectedPrice = price;
  }
}
