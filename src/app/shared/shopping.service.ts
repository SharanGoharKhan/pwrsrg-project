import { Injectable } from '@angular/core';
import { Shopping } from './shopping.model';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class ShoppingService {

constructor() { }
    cartItemChange = new Subject<Shopping[] | null>();
    private shopping: Shopping[] = [
        new Shopping('Hat', 20, 1),
        new Shopping('T-Shirt', 25, 1),
        new Shopping('Shorts', 35, 1)
    ];
    private cartItems: Shopping[] = [
    ];
    getShoppingItems() {
        return this.shopping.slice();
    }
    addToShoppingCart(shopping: Shopping) {
        for(let i=0; i<this.cartItems.length; ++i) {
            if (shopping.name == this.cartItems[i].name) {
                this.cartItems[i].numberOfItem++;
                this.cartItemChange.next(this.cartItems.slice());
                return;
            }
        }
        this.cartItems.push(shopping);
        this.cartItemChange.next(this.cartItems.slice());
    }
    getCartItems() {
        if( this.cartItems == null) {
            return;
        }
        return this.cartItems.slice();
    }
    clearCart() {
        this.cartItems = [];
        this.cartItemChange.next(this.cartItems);
    }
    removeCartItem(index: number) {
        this.cartItems.splice(index,1);
        this.cartItemChange.next(this.cartItems.slice());
    }
    addTotalAndAmount() {
        let res = {total: 0, amount: 0};
        for(let i=0; i<this.cartItems.length; ++i) {
            res.total+= this.cartItems[i].amount*this.cartItems[i].numberOfItem;
            res.amount+= this.cartItems[i].numberOfItem;
        }
        return res;
    }
}