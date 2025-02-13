import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductMainComponent} from "./product-main/product-main.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: ProductMainComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
