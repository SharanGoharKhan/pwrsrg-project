import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingService } from './../../shared/shopping.service';
import { Shopping } from '../../shared/shopping.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  cartItems: Shopping[];
  total: number;
  numberOfItems: number;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
   this.cartItems = this.shoppingService.getCartItems();
   this.subscription = this.shoppingService.cartItemChange
   .subscribe(
     (cartEl:Shopping[]) => {
       let res = {total: 0,amount: 0};
       res = this.shoppingService.addTotalAndAmount();
       this.numberOfItems = res.amount;
       this.total = res.total;
       this.cartItems = cartEl;
     }
   )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  clearCart() {
    this.shoppingService.clearCart();
  }
  removeCartEl(index: number) {
    this.shoppingService.removeCartItem(index);
  }

}