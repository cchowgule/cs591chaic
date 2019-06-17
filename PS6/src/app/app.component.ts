import { Component, OnInit } from '@angular/core';
import {PriceAsyncService} from './services/price-async.service';
import {PRICE} from './models/priceModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'a Kilogram of Gold Prices';
  prices: PRICE[];
  days: number;

  getDefaultPrice(): void {
    this.price.getDefualtPrice()
      .subscribe(prices => {
        this.prices = prices;
      });
  }

  selectDays(): void {
    const newDays: number = this.days;
    this.price.getPrices(newDays)
      .subscribe(prices => {
        this.prices = prices;
      });
  }

  constructor(private price: PriceAsyncService) { }

  ngOnInit() {
    this.getDefaultPrice();
  }

}
