import { Component, OnInit, Input } from '@angular/core';

import { Shopping } from '../../../shared/shopping.model';
import { ShoppingService } from '../../../shared/shopping.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  @Input() shoppingPr: Shopping;

  constructor(private shoppingService: ShoppingService) { }
  ngOnInit() {
  }
  onAddItem() {
    this.shoppingService.addToShoppingCart(this.shoppingPr);
  }
}