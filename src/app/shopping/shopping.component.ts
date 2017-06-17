import { Component, OnInit } from '@angular/core';


import { ShoppingService } from '../shared/shopping.service';
import { Shopping } from '../shared/shopping.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  shopping : Shopping[];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shopping = this.shoppingService.getShoppingItems();
  }

}