import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { ShoppingItemComponent } from './shopping/shopping-list/shopping-item/shopping-item.component';

import { ShoppingService } from './shared/shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingCartComponent,
    ShoppingItemComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
