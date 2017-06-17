import { Injectable } from '@angular/core';
import { Shopping } from './shopping.model';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class ShoppingService {

constructor() { }
shoppingItemChange = new Subject<Shopping[]>();
private shopping: Shopping[] = [
    new Shopping('Hat', 20),
    new Shopping('T-Shirt', 25),
    new Shopping('Shorts', 35)
];
getShoppingItems() {
    return this.shopping.slice();
}
}