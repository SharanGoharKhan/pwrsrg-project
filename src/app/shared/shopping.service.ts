import { Injectable } from '@angular/core';
import { Shopping } from './shopping.model';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class ShoppingService {

constructor() { }
    cartItemChange = new Subject<Shopping[]>();
    private shopping: Shopping[] = [
        new Shopping('Hat', 20),
        new Shopping('T-Shirt', 25),
        new Shopping('Shorts', 35)
    ];
    private cartItems: Shopping[] = [
    ];
    getShoppingItems() {
        return this.shopping.slice();
    }
    addToShoppingCart(shopping: Shopping) {
        this.cartItems.push(shopping);
        this.cartItemChange.next(this.cartItems.slice());
    }
    getCartItems() {
        if( this.cartItems == null) {
            return;
        }
        return this.cartItems.slice();
    }
}