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

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
   this.cartItems = this.shoppingService.getCartItems();
   this.subscription = this.shoppingService.cartItemChange
   .subscribe(
     (cartEl:Shopping[]) => {
       this.cartItems = cartEl;
     }
   )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}