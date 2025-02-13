import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ProductMainComponent} from "./product-main/product-main.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";


@NgModule({
  declarations: [
    ProductMainComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
