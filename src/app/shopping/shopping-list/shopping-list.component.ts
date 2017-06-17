import { Component, OnInit } from '@angular/core';

import { ShoppingService } from '../../shared/shopping.service';
import { Shopping } from '../../shared/shopping.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shopping : Shopping[];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shopping = this.shoppingService.getShoppingItems();
  }

}