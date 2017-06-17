import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';

const appRoutes: Routes = [
    {path: '',redirectTo:'/shopping',pathMatch: 'full'},
    {path: 'shopping', component: ShoppingComponent}
];
@NgModule(
    {
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule {

}