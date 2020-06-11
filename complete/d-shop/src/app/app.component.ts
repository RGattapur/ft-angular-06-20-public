import { Component, OnInit } from '@angular/core';
import { ShopDetails, StockItems } from "./data/shop.data";
import { Item, BasketItem } from "./types/custom.types";
import { DataService } from "./service/data.service";
import { MockService } from "./service/mock.service";

const SHOPDATA : string = "assets/fruitveg.json"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [{ provide: DataService, useClass: MockService }]
})

export class AppComponent implements OnInit {

    total: number = 0;
    stockItems : Item[] ;
    basket : BasketItem[]  ;
    shopName : string = "";

    constructor( private ds:DataService ) {}

    ngOnInit() {
      this.drawShopName()
      this.init();
    }

    init() {
      this.basket = [];

      // Create a deep copy of the array of objects returned by the service.

      this.ds.getData( SHOPDATA )
        .subscribe(
          data => this.stockItems = data.map( item => ({ ...item})),
          e => this.shopName = e.message
        )

    }
    // e => console.log(`${e.status} ${e.statusText}`)

    drawShopName() {
      let {name, street, town, postCode} = ShopDetails
      this.shopName = `${name}, ${street} ${town} ${postCode}`;
    }

    buyItem( item ) {
      // Add a copy of the item object to the basket.
      // Change the quantity to zero.
      this.basket.push({ ...item, quantity: 1, id: Date.now() });
      // Reduce the quantity in the stock item-object by 1.
      // Avoid reducing below zero.
      item.quantity = Math.max(item.quantity - 1, 0);
      // Add to the total price
      this.total += item.price;

      console.table( this.basket );
    }

    removeItem( item ) {
        // Increase stock level for item removed from basket.
        this.stockItems.find(i => i.code === item.code).quantity++;
        // Remove this item from the basket
        this.basket = this.basket.filter(i => i.id !== item.id);
    }

    getTotal = () => this.basket.map(item => item.price).reduce((a, b) => a + b, 0);

}
